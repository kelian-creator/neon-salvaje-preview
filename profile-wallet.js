/* Un perfil y una cartera por identidad; vista local sin cobros. */
(() => {
 "use strict";
 const config=window.ProfileConfig,key="neon-profile-wallet-v1";
 const id=()=>crypto.randomUUID?.() ?? Date.now()+"-"+Math.random();
 const day=()=>new Intl.DateTimeFormat("en-CA",{timeZone:config.timeZone,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
 let state,adapter=null,syncPromise=null;
 let storageAvailable=true;
 try{state=JSON.parse(localStorage.getItem(key)||"null");}catch{storageAvailable=false;}
 function valid(value){return value && typeof value.id==="string" && Number.isSafeInteger(value.balance) && value.balance>=0;}
 if(!valid(state)){
  let legacy=null;try{legacy=JSON.parse(localStorage.getItem("neon-salvaje-roguelike-v1")||"null");}catch{}
  const carried=legacy?.activeMatch?.balance;
  state={version:1,id:id(),googleUid:null,name:legacy?.playerState?.name||"",balance:Number.isSafeInteger(carried)&&carried>=0?carried:config.initialCredits,
   lastDailyDay:day(),createdAt:Date.now(),updatedAt:Date.now(),ledger:[],receipts:[],outbox:[],serverVersion:0,legacyMigrated:!!legacy};
  state.ledger.push({id:"welcome:"+state.id,kind:state.legacyMigrated?"migration":"welcome",amount:state.balance,at:Date.now()});
 }
 function normalizeTemple(value){
  const owned=[...new Set((Array.isArray(value?.owned)?value.owned:[]).filter(id=>window.TempleCatalog.some(item=>item.id===id)))];
  const category=id=>window.TempleCatalog.find(item=>item.id===id)?.type;
  return {owned,decor:(Array.isArray(value?.decor)?value.decor:[]).filter(id=>owned.includes(id)&&category(id)==="decor"),god:owned.includes(value?.god)&&category(value.god)==="god"?value.god:null,pet:owned.includes(value?.pet)&&category(value.pet)==="pet"?value.pet:null};
 }
 function applyTempleChange(temple,change){
  const item=window.TempleCatalog.find(item=>item.id===change.itemId);if(!item)return;
  if(change.purchase&&!temple.owned.includes(item.id))temple.owned.push(item.id);
  if(item.type==="decor"){temple.decor=temple.decor.filter(id=>id!==item.id);if(change.enabled)temple.decor.push(item.id);}
  else temple[item.type]=change.enabled?item.id:null;
 }
 state.temple=normalizeTemple(state.temple);
 state.timeSeconds=Number.isSafeInteger(state.timeSeconds)&&state.timeSeconds>=0?state.timeSeconds:0;
 state.ledger=Array.isArray(state.ledger)?state.ledger.slice(-200):[];
 state.receipts=Array.isArray(state.receipts)?state.receipts:[];
 state.outbox=Array.isArray(state.outbox)?state.outbox:[];
 const snapshot=()=>structuredClone({...state,storageAvailable,cloudLinked:!!state.googleUid,needsSync:state.outbox.length});
 function persist(){
  state.updatedAt=Date.now();
  try{localStorage.setItem(key,JSON.stringify(state));storageAvailable=true;}catch{storageAvailable=false;}
 }
 function notify(){document.dispatchEvent(new CustomEvent("profile:wallet-change",{detail:snapshot()}));}
 function reload(){try{const stored=JSON.parse(localStorage.getItem(key)||"null");if(valid(stored) && stored.id===state.id)state=stored;}catch{}}
 function transact(amount,kind,receipt=id(),queue=true,timeDelta=0,templeChange=null){
  reload();
  if(state.receipts.includes(receipt))return state.balance;
  if(!Number.isSafeInteger(amount) || !Number.isSafeInteger(state.balance+amount) || state.balance+amount<0)throw new Error("Saldo insuficiente o importe inválido.");
  if(!Number.isSafeInteger(timeDelta)||state.timeSeconds+timeDelta<0)throw new Error("Tiempo extra insuficiente.");
  if(templeChange){
   const item=window.TempleCatalog.find(item=>item.id===templeChange.itemId);state.temple=normalizeTemple(state.temple);
   if(!item || (templeChange.purchase&&(state.temple.owned.includes(item.id)||amount!==-item.price)) || (!templeChange.purchase&&(!state.temple.owned.includes(item.id)||amount!==0)))throw new Error("Este artículo no se puede comprar o equipar.");
  }
  if(amount===0 && timeDelta===0 && !templeChange)return state.balance;
  const entry={id:receipt,kind,amount,timeDelta,templeChange,at:Date.now()};
  if(templeChange)applyTempleChange(state.temple,templeChange);
  state.timeSeconds+=timeDelta;
  state.balance+=amount;if(["daily","advertisement","purchase","admin"].includes(kind))state.receipts.push(receipt);state.ledger.unshift(entry);state.ledger=state.ledger.slice(0,200);
  if(queue && state.googleUid)state.outbox.push(entry);
  persist();notify();if(adapter)void sync();return state.balance;
 }
 async function daily(){
  if(navigator.locks)return navigator.locks.request("neon-daily-wallet",claimDaily);
  return claimDaily();
 }
 async function claimDaily(){
  reload();
  if(state.googleUid && !adapter)throw new Error("Conecta con tu cuenta antes de recoger el regalo.");
  if(adapter && state.googleUid){
   await sync();if(state.outbox.length)throw new Error("Hay movimientos pendientes de sincronizar.");
   const result=await adapter.claimDaily();applyServer(result);return result.dailyGranted===true;
  }
  const today=day();
  if(today<=state.lastDailyDay)return false;
  transact(config.dailyCredits,"daily","daily:"+today,false);
  state.lastDailyDay=today;persist();notify();
  return true;
 }
 async function sync(){
  if(!adapter || !state.googleUid)return false;
  if(syncPromise)return syncPromise;
  syncPromise=(async()=>{
   reload();const batch=state.outbox.slice(0,100);
   const result=await adapter.sync({operations:batch,name:state.name});
   // Conservar movimientos aparecidos mientras la petición estaba en curso.
   const acknowledged=new Set(result.acknowledged||[]);
   const remaining=state.outbox.filter(item=>!acknowledged.has(item.id));
   const pending=remaining.reduce((sum,item)=>sum+item.amount,0);
   const pendingTime=remaining.reduce((sum,item)=>sum+(item.timeDelta||0),0);
   if(result.profileId!==state.id || !Number.isSafeInteger(result.balance) || result.balance+pending<0 || !Number.isSafeInteger(result.timeSeconds||0) || (result.timeSeconds||0)+pendingTime<0)throw new Error("La respuesta no coincide con el perfil.");
   state.outbox=remaining;
   if(result.version>=state.serverVersion){state.balance=result.balance+pending;state.timeSeconds=(result.timeSeconds||0)+remaining.reduce((sum,item)=>sum+(item.timeDelta||0),0);state.serverVersion=result.version;state.temple=normalizeTemple(result.temple);for(const entry of remaining)if(entry.templeChange)applyTempleChange(state.temple,entry.templeChange);}
   if(result.ledger){const entries=[...state.ledger,...result.ledger];state.ledger=[...new Map(entries.map(entry=>[entry.id,entry])).values()].sort((a,b)=>b.at-a.at).slice(0,200);}
   persist();notify();return !remaining.length;
  })().catch(error=>{document.dispatchEvent(new CustomEvent("profile:sync-error",{detail:error.message}));return false;}).finally(()=>{syncPromise=null;});
  return syncPromise;
 }
 function applyServer(result){
  if(result.profileId!==state.id || !Number.isSafeInteger(result.balance) || result.balance<0)throw new Error("Cartera del servidor inválida.");
  if(state.outbox.length)throw new Error("Sincroniza antes de aplicar un abono del servidor.");
  if(result.version<state.serverVersion)return;
  state.balance=result.balance;state.timeSeconds=result.timeSeconds||0;state.temple=normalizeTemple(result.temple);state.serverVersion=result.version;
  if(result.lastDailyDay)state.lastDailyDay=result.lastDailyDay;
  if(result.receipt && !state.receipts.includes(result.receipt)){
   state.receipts.push(result.receipt);state.ledger.unshift({id:result.receipt,kind:result.kind||"purchase",amount:result.grantedCredits||0,timeDelta:result.grantedSeconds||0,at:Date.now()});
   state.ledger=state.ledger.slice(0,200);
  }
  persist();notify();
 }
 async function bindAccount(account,remote,api){
  if(!remote.profileId || !Number.isSafeInteger(remote.balance) || remote.balance<0)throw new Error("Perfil de cuenta inválido.");
  try{localStorage.setItem("neon-wallet-backup:"+state.id,JSON.stringify(state));}catch{}
  state={version:1,id:remote.profileId,googleUid:account.uid,name:remote.name||account.displayName||"Jugador",
   balance:remote.balance,temple:normalizeTemple(remote.temple),timeSeconds:remote.timeSeconds||0,lastDailyDay:remote.lastDailyDay,createdAt:remote.createdAt,updatedAt:Date.now(),ledger:remote.ledger||[],
   receipts:[],outbox:[],serverVersion:remote.version,legacyMigrated:false};
  adapter=api;
  persist();
  if(remote.progress)try{localStorage.setItem(storageKey("roguelike"),JSON.stringify(remote.progress));}catch{}
  if(remote.records)try{localStorage.setItem(storageKey("matches"),JSON.stringify(remote.records));}catch{}
  notify();
 }
 function storageKey(type){return "neon-"+type+"-profile-"+state.id;}
 function setName(name){reload();const cleaned=String(name).trim().replace(/\s+/g," ").slice(0,24);if(!cleaned)throw new Error("Escribe un nombre.");state.name=cleaned;persist();notify();if(adapter)void sync();}
 if(!state.googleUid && state.legacyMigrated){
  try{for(const [type,oldKey] of [["roguelike","neon-salvaje-roguelike-v1"],["matches","neon-salvaje-match-index"]]){const target=storageKey(type),old=localStorage.getItem(oldKey);if(!localStorage.getItem(target)&&old)localStorage.setItem(target,old);}}catch{}
 }
 persist();
 window.ProfileWallet=Object.freeze({
  snapshot,storageKey,setName,transact,daily,
  buyTempleItem(itemId){const item=window.TempleCatalog.find(item=>item.id===itemId);if(!item)throw new Error("Artículo desconocido.");transact(-item.price,"temple-purchase",id(),true,0,{itemId,purchase:true,enabled:true});},
  equipTempleItem(itemId,enabled){transact(0,"temple-equip",id(),true,0,{itemId,purchase:false,enabled:!!enabled});},
  buyTime(seconds){const offer=config.timeOffers.find(item=>item.seconds===seconds);if(!offer)throw new Error("Oferta de tiempo inválida.");transact(-offer.cost,"time-purchase",id(),true,seconds);},
  useTime(seconds){transact(0,"time-use",id(),true,-seconds);},sync,bindAccount,applyServer,
  connect(api){adapter=api;},
  disconnect(){adapter=null;},
  async saveProgress(progress,records){if(adapter)try{await adapter.saveProgress({progress,records});}catch{}},
  isReady:()=>storageAvailable && (!state.googleUid || adapter?.canPlay===true)
 });
 window.addEventListener("storage",event=>{if(event.key!==key)return;try{const next=JSON.parse(event.newValue||"null");if(valid(next)&&next.id!==state.id){adapter=null;location.reload();return;}}catch{}reload();notify();});
 document.addEventListener("visibilitychange",()=>{if(!document.hidden && !state.googleUid)void daily();});
 // El regalo de bienvenida ya cubre el día de creación; desde mañana +20.
 if(!state.googleUid)void daily();
})();
