/* Fase 9. Capa publicitaria aislada: no modifica probabilidades ni multiplicadores. */
(() => {
 "use strict";
 const config = window.TempleAdsConfig;
 const $ = id => document.getElementById(id);
 const settings = $("ad-settings"), presentation = $("ad-presentation");
 const key = "neon-salvaje-ad-preferences-v1";
 const isolation=[];
 function restoreIsolation(){for(const [element,previous] of isolation.splice(0))element.inert=previous;}
 function isolate(overlay){restoreIsolation();for(const element of document.body.children){if(element===overlay || element.tagName==="SCRIPT")continue;isolation.push([element,element.inert]);element.inert=true;}}
 const state = { mode:"off", provider:null, controller:null, showing:null, cleanups:[],
   sessions:0, lastInterstitial:0, initializing:false, message:"Publicidad desactivada.",
   haloOwned:false, haloEnabled:false, returnFocus:null, settingsPaused:false };
 try { const saved=JSON.parse(localStorage.getItem(key)||"{}");
  state.haloOwned=saved.haloOwned===true; state.haloEnabled=state.haloOwned && saved.haloEnabled===true;
 } catch {}
 const save = () => {try{localStorage.setItem(key,JSON.stringify({demo:state.mode==="demo",haloOwned:state.haloOwned,haloEnabled:state.haloEnabled}));}catch{}};
 const active = () => !document.body.classList.contains("session-locked");
 const safe = (credits=false) => !document.hidden && !state.showing && !window.NativeAdMob?.isPresenting() &&
  (credits ? window.GameAdRewards?.canClaim() : !active()) &&
  ![...document.querySelectorAll('[role="dialog"]')].some(el=>!el.closest("[hidden]") && !settings.contains(el) &&
    !(credits && el.closest("#mobile-pause")));
 const reflect = () => {
  document.dispatchEvent(new Event("ads:state-change"));
  document.body.classList.toggle("ad-halo-gold",state.haloOwned && state.haloEnabled);
  $("ad-status").textContent=state.message;
  const creditAvailable=state.mode!=="off" && !state.initializing && !state.showing && !!window.GameAdRewards?.canClaim() && !window.NativeAdMob?.isPresenting();
  $("ad-credits-button").disabled=!creditAvailable;
  $("ad-credits-game-button").disabled=!creditAvailable;
  $("ad-credits-game-button").textContent=state.mode==="off"?"ANUNCIO +60 CR · OPCIONES":state.mode==="demo"?"DEMO ANUNCIO · +60 CR":"VER ANUNCIO · +60 CR";
  if(state.mode==="off" && active() && !state.showing && window.GameAdRewards?.canClaim())$("ad-credits-game-button").disabled=false;
  $("ad-credits-status").textContent=active()?"Recompensa fija: 60 CR por anuncio completado. Las probabilidades no cambian.":"Puedes conseguir +60 CR también desde la pantalla Créditos.";
  $("ad-provider-enable").disabled=!state.provider || state.initializing || !!state.showing;
  $("ad-demo-enable").disabled=state.initializing || !!state.showing;
  $("ad-reward-button").disabled=state.mode==="off" || state.initializing || !!state.showing || active() || state.haloOwned;
  $("ad-reward-button").textContent=state.mode==="demo"?"PROBAR ANUNCIO VOLUNTARIO (DEMO)":"VER ANUNCIO VOLUNTARIO";
  $("ad-halo-option").hidden=!state.haloOwned;
  $("ad-halo-toggle").checked=state.haloEnabled;
  $("ad-privacy-options").hidden=state.mode!=="provider" || typeof state.provider?.showPrivacyOptions!=="function";
  $("ad-reward-status").textContent=state.haloOwned?"Halo desbloqueado en este dispositivo. Puedes activarlo o quitarlo.":active()?"Disponible al finalizar la partida.":"Puedes cerrar el anuncio sin penalización y continuar jugando.";
 };
 const bounded = async (task, ms, controller) => {
  let timer, listener;
  try{return await Promise.race([
   Promise.resolve().then(task),
   new Promise((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(new Error("timeout"));},ms);
    listener=()=>reject(new Error("cancelled"));
    if(controller.signal.aborted)listener();else controller.signal.addEventListener("abort",listener,{once:true});
   })
  ]);}finally{clearTimeout(timer);controller.signal.removeEventListener("abort",listener);}
 };
 function cancelPresentation(){
  if(!state.showing)return;
  state.showing.controller.abort();
  state.showing.resolve?.({completed:false,rewardEarned:false});
  presentation.hidden=true;
 }
 function clearBanners(){
  for(const cleanup of state.cleanups.splice(0)){try{cleanup();}catch{}}
  for(const slot of document.querySelectorAll("[data-ad-slot]")){slot.hidden=true;slot.setAttribute("aria-hidden","true");slot.replaceChildren();}
 }
 function disable(){
  state.controller?.abort();cancelPresentation();clearBanners();state.mode="off";state.initializing=false;
  state.message="Publicidad desactivada. Puedes seguir jugando sin anuncios.";
  try{Promise.resolve(state.provider?.dispose?.()).catch(()=>{});}catch{}
  save();reflect();
 }
 function bannerShell(slotName){
  const slot=document.querySelector('[data-ad-slot="'+slotName+'"]');if(!slot)return null;
  slot.replaceChildren();const label=document.createElement("small");label.className="ad-label";
  label.textContent=state.mode==="demo"?"PUBLICIDAD · DEMOSTRACIÓN LOCAL":"PUBLICIDAD";
  const host=document.createElement("div");host.className="ad-banner-content";
  slot.append(label,host);return {slot,host};
 }
 async function mountBanners(){
  const mode=state.mode,controller=state.controller;
  for(const name of config.bannerSlots){
   if(controller.signal.aborted)return;
   const shell=bannerShell(name);if(!shell)continue;
   try{
    if(mode==="demo"){
     const strong=document.createElement("strong");strong.textContent="EL TEMPLO TIENE UN PATROCINADOR IMAGINARIO";
     const copy=document.createElement("span");copy.textContent="Ejemplo local · sin rastreo, enlaces comerciales ni ingresos.";
     shell.host.append(strong,copy);
    }else{
     if(typeof state.provider.renderBanner!=="function")continue;
     const child=new AbortController(),onAbort=()=>child.abort();
     controller.signal.addEventListener("abort",onAbort,{once:true});
     let cleanup;
     try{cleanup=await bounded(()=>state.provider.renderBanner({slot:name,element:shell.host,signal:child.signal}),config.providerLoadTimeoutMs,child);}
     finally{controller.signal.removeEventListener("abort",onAbort);}
     if(!controller.signal.aborted)state.cleanups.push(()=>child.abort());
     if(controller.signal.aborted){if(typeof cleanup==="function")cleanup();return;}
     if(cleanup===false){shell.slot.hidden=true;shell.slot.replaceChildren();continue;}
     if(typeof cleanup==="function")state.cleanups.push(cleanup);
    }
    if(!controller.signal.aborted && state.mode===mode){shell.slot.hidden=false;shell.slot.removeAttribute("aria-hidden");}
   }catch{shell.slot.hidden=true;shell.slot.replaceChildren();}
  }
 }
 function enableDemo(){
  disable();state.controller=new AbortController();state.mode="demo";
  state.message="Demostración local activada. No hay anuncios reales ni ingresos.";
  save();reflect();void mountBanners();
 }
 async function enableProvider(){
  if(!state.provider || state.initializing || state.showing)return false;
  disable();state.initializing=true;state.controller=new AbortController();const controller=state.controller,provider=state.provider;
  state.message="Consultando las opciones de privacidad del proveedor…";reflect();
  try{
   const consent=await bounded(()=>provider.requestConsent({signal:controller.signal}),config.presentationTimeoutMs,controller);
   if(consent?.canRequestAds!==true || controller.signal.aborted)throw new Error("consent");
   await bounded(()=>provider.initialize({consent,signal:controller.signal}),config.providerLoadTimeoutMs,controller);
   if(controller.signal.aborted)return false;
   state.mode="provider";state.message="AdMob activado. Rewarded voluntario: +60 CR; probabilidades y multiplicadores sin cambios.";state.initializing=false;save();reflect();void mountBanners();return true;
  }catch{
   if(state.controller===controller){disable();state.message="No hay anuncios disponibles o no se ha autorizado el proveedor. El juego sigue disponible.";reflect();}
   return false;
  }
 }
 function registerProvider(provider){
  if(!provider || !["requestConsent","initialize"].every(name=>typeof provider[name]==="function"))throw new TypeError("El proveedor necesita requestConsent e initialize.");
  disable();state.provider=provider;state.message="Proveedor conectado, pendiente de activación y privacidad.";reflect();
 }
 function demo(kind,controller,reward="halo"){
  return new Promise(resolve=>{
   state.showing.resolve=resolve;
   $("ad-title").textContent=kind==="rewarded"?(reward==="credits"?"+60 CRÉDITOS VIRTUALES":"HALO DORADO DEL TEMPLO"):"UN RESPIRO ENTRE PARTIDAS";
   $("ad-copy").textContent=kind==="rewarded"?"Demostración local de la recompensa elegida. Completar la concede; cerrar antes no la concede y no tiene penalización.":"Ejemplo de anuncio entre partidas. Puedes cerrarlo inmediatamente.";
   $("ad-presentation-content").textContent="✦ TEMPLO DE LA FORTUNA ✦";
   $("ad-demo-complete").hidden=kind!=="rewarded";
   $("ad-demo-complete").textContent=reward==="credits"?"COMPLETAR DEMO · +60 CR":"COMPLETAR DEMO · DESBLOQUEAR HALO";
   $("ad-presentation-status").textContent="DEMO LOCAL · NO ES PUBLICIDAD REAL";
   presentation.hidden=false;isolate(presentation);$("ad-dismiss").focus();
   if(controller.signal.aborted)resolve({completed:false,rewardEarned:false});
  });
 }
 async function show(kind,reward="halo"){
  const credits=kind==="rewarded" && reward==="credits";
  if(state.mode==="off" || state.initializing || !safe(credits))return false;
  if(kind==="rewarded" && !credits && state.haloOwned)return false;
  const transactionId=crypto.randomUUID?.() ?? String(Date.now())+"-"+Math.random();
  const session=credits?window.GameAdRewards.begin(transactionId):null;
  if(credits && !session)return false;
  const adPaused=credits && active() && !pauseStartedAt;
  if(adPaused)window.MobileRuntime.pause();
  const controller=new AbortController(),mode=state.mode,provider=state.provider;
  const transaction={controller,resolve:null};state.showing=transaction;reflect();
  const previousFocus=document.activeElement;
  const gameAudio=typeof audioContext!=="undefined"?audioContext:null;
  const wasRunning=gameAudio?.state==="running";
  if(wasRunning)void gameAudio.suspend().catch(()=>{});
  try{
   const method=kind==="rewarded"?"showRewarded":"showInterstitial";
   if(mode==="provider" && typeof provider[method]!=="function")return false;
   const result=await bounded(()=>mode==="demo"?demo(kind,controller,reward):provider[method]({
    signal:controller.signal, reward,
    canPresent:()=> (credits ? window.GameAdRewards?.isHolding() : !active()) && !document.hidden && !controller.signal.aborted
   }),config.presentationTimeoutMs,controller);
   if(controller.signal.aborted || state.mode!==mode || (!credits && active()))return false;
   if(kind==="rewarded" && result?.completed===true && result?.rewardEarned===true){
    if(credits)return window.GameAdRewards.grant({transactionId,session,amount:60});
    state.haloOwned=true;state.haloEnabled=true;save();return true;
   }
   return result?.completed===true;
  }catch{return false;}
  finally{
   controller.abort();presentation.hidden=true;restoreIsolation();
   if(state.showing===transaction)state.showing=null;
   if(credits)window.GameAdRewards.finish(transactionId);
   if(adPaused && !document.hidden)void window.MobileRuntime.resume();
   reflect();if(wasRunning && soundEnabled && !document.hidden && !pauseStartedAt)void gameAudio.resume().catch(()=>{});
   if(!document.hidden)previousFocus?.focus();
  }
 }
 function closeSettings(){
  settings.hidden=true;restoreIsolation();
  if(state.settingsPaused){state.settingsPaused=false;void window.MobileRuntime?.resume();}
  state.returnFocus?.focus();
 }
 function openSettings(){
  if(state.showing || !settings.hidden)return;
  if(typeof isSpinning!=="undefined" && (isSpinning || destinyWheelIsSpinning || recoveryModal.dataset.spinning==="true")){showToast("Espera a que termine el giro para abrir publicidad.");return;}
  if([...document.querySelectorAll('[role="dialog"]')].some(el=>!el.closest("[hidden]")))return;
  state.returnFocus=document.activeElement;
  state.settingsPaused=active() && !pauseStartedAt && !!runState.pathChoice;
  if(state.settingsPaused)window.MobileRuntime?.pause();
  settings.hidden=false;isolate(settings);reflect();$("ad-settings-close").focus();
 }
 $("ad-settings-button").addEventListener("click",openSettings);
 $("ad-entry-settings-button").addEventListener("click",openSettings);
 $("ad-settings-close").addEventListener("click",closeSettings);
 $("ad-demo-enable").addEventListener("click",enableDemo);
 $("ad-provider-enable").addEventListener("click",()=>void enableProvider());
 $("ad-disable").addEventListener("click",disable);
 $("ad-halo-toggle").addEventListener("change",()=>{state.haloEnabled=state.haloOwned && $("ad-halo-toggle").checked;save();reflect();});
 $("ad-dismiss").addEventListener("click",cancelPresentation);
 $("ad-demo-complete").addEventListener("click",()=>state.showing?.resolve?.({completed:true,rewardEarned:true}));
 $("ad-credits-game-button").addEventListener("click",async()=>{
  if(state.mode==="off"){openSettings();return;}
  const earned=await show("rewarded","credits");
  if(!earned && !document.hidden)showToast("Anuncio cerrado o no disponible. Sin penalización.");
 });
 $("ad-credits-button").addEventListener("click",async()=>{
  settings.hidden=true;restoreIsolation();const earned=await show("rewarded","credits");
  if(!document.hidden && active()){settings.hidden=false;isolate(settings);reflect();$("ad-credits-status").textContent=earned?"¡+60 créditos añadidos a tu partida!":"Anuncio cerrado o no disponible. No se han añadido créditos ni penalizaciones.";$("ad-settings-close").focus();}
 });
 $("ad-reward-button").addEventListener("click",async()=>{
  settings.hidden=true;restoreIsolation();const earned=await show("rewarded");
  if(!document.hidden && !active()){settings.hidden=false;isolate(settings);reflect();$("ad-reward-status").textContent=earned?"¡Halo dorado desbloqueado! Solo cambia el aspecto del templo.":"Anuncio cerrado o no disponible. Puedes continuar sin penalización.";$("ad-settings-close").focus();}
 });
 $("ad-privacy-options").addEventListener("click",async()=>{
  if(state.mode!=="provider")return;
  const provider=state.provider;disable();
  try{await provider.showPrivacyOptions();state.message="Preferencias actualizadas. Reactiva el proveedor si deseas anuncios.";reflect();}catch{state.message="No se pudieron abrir las opciones del proveedor. Los anuncios están desactivados.";reflect();}
 });
 document.addEventListener("keydown",event=>{
  const overlay=!presentation.hidden?presentation:!settings.hidden?settings:null;if(!overlay)return;
  if(event.key==="Escape"){event.preventDefault();event.stopImmediatePropagation();overlay===settings?closeSettings():cancelPresentation();}
  if(event.key==="Tab"){
   const buttons=[...overlay.querySelectorAll("button:not(:disabled),input,a[href]")].filter(el=>!el.closest("[hidden]"));
   if(!buttons.length)return;const first=buttons[0],last=buttons.at(-1);
   if(!overlay.contains(document.activeElement)){event.preventDefault();first.focus();}
   else if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
   else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
  }
 },true);
 document.addEventListener("temple:session-start",()=>{cancelPresentation();settings.hidden=true;restoreIsolation();state.settingsPaused=false;reflect();});
 document.addEventListener("temple:session-end",event=>{
  reflect();if(event.detail?.rounds<1 || event.detail?.reason==="PARTIDA REINICIADA")return;
  state.sessions++;
  if(state.sessions<config.matchesBetweenInterstitials || Date.now()-state.lastInterstitial<config.interstitialCooldownMs)return;
  setTimeout(()=>{
   if(state.mode==="off" || !settings.hidden || !safe())return;
   state.sessions=0;state.lastInterstitial=Date.now();void show("interstitial");
  },350);
 });
 document.addEventListener("temple:state-change",reflect);
 document.addEventListener("temple:ad-native-closed",reflect);
 document.addEventListener("temple:ad-background",()=>{if(!window.NativeAdMob?.isPresenting())cancelPresentation();});
 document.addEventListener("visibilitychange",()=>{if(document.hidden && !window.NativeAdMob?.isPresenting()){cancelPresentation();if(!settings.hidden)closeSettings();}});
 window.addEventListener("pagehide",()=>{state.controller?.abort();cancelPresentation();clearBanners();});
 window.addEventListener("pageshow",event=>{if(event.persisted && state.mode!=="off"){state.controller=new AbortController();void mountBanners();}});
 window.AdLayer=Object.freeze({
  registerProvider,enableProvider,enableDemo,disable,
  requestRewarded:(reward="halo")=>show("rewarded",reward==="credits"?"credits":"halo"),openSettings,
  getStatus:()=>Object.freeze({mode:state.mode,providerRegistered:!!state.provider,busy:!!state.showing,haloOwned:state.haloOwned})
 });
 let demoSaved=false;try{demoSaved=JSON.parse(localStorage.getItem(key)||"{}").demo===true;}catch{}
 if(config.mode==="demo" || new URLSearchParams(location.search).get("ads")==="demo" || demoSaved)enableDemo();else reflect();
})();
