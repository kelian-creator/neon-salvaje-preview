(() => {
 "use strict";
 const $=id=>document.getElementById(id),catalog=window.TempleCatalog,wallet=window.ProfileWallet;
 let category="decor",reactionTimer;
 const ownedState=()=>wallet.snapshot().temple||{owned:[],decor:[],god:null,pet:null};
 const item=id=>catalog.find(entry=>entry.id===id);
 const petImage=id=>"assets/pets/"+id.replace("pet-","")+".svg";
 function modifiers(){const state=ownedState();return {comboMultiplier:item(state.god)?.comboMultiplier||1,winMultiplier:item(state.pet)?.winMultiplier||1};}
 function templeArt(decor){
  const has=id=>decor.includes(id),gold=has("gold")?"#e8c06a":"#676179";
  const gem=(x,y,color,size=24)=>'<g transform="translate('+x+' '+y+')"><path d="M0 -'+size+'L'+size+' 0L0 '+size+'L-'+size+' 0Z" fill="'+color+'" stroke="#fff9" stroke-width="1.5"/><path d="M0 -'+size+'V'+size+'M-'+size+' 0H'+size+'" stroke="#fff6"/><path d="M0 -'+size+'L'+size+' 0L0 0Z" fill="#fff4"/></g>';
  let details='';
  if(has("jewels"))for(const [x,y] of [[80,155],[920,155],[80,560],[920,560]])details+=gem(x,y,"#68dcf1",24);
  if(has("emerald"))for(const x of [130,870])for(const y of [270,360,450])details+=gem(x,y,"#56dc9c",17);
  if(has("ruby"))for(const x of [350,425,500,575,650])details+=gem(x,115-Math.abs(x-500)*.15,"#fa557f",x===500?32:18);
  if(has("astral")){for(let n=0;n<22;n++){const x=70+(n*137)%860,y=20+(n*83)%570;details+='<circle cx="'+x+'" cy="'+y+'" r="2" fill="#d6b9ff"/>';}details+=gem(80,355,"#b28af7",32)+gem(920,355,"#b28af7",32);}
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="metal"><stop stop-color="'+gold+'"/><stop offset=".48" stop-color="#3c304c"/><stop offset="1" stop-color="'+gold+'"/></linearGradient></defs><g fill="none" stroke="url(#metal)" stroke-width="5" opacity=".8"><path d="M25 625V130L500 25L975 130V625M50 625V150L500 50L950 150V625"/><path d="M95 190V595M125 195V595M875 195V595M905 190V595" stroke-width="13"/><path d="M60 610H940M65 630H935M150 145L500 75L850 145"/><path d="M45 160H155M845 160H955M55 595H165M835 595H945" stroke-width="8"/></g>'+details+'</svg>';
 }
 function imageFor(entry){if(entry.type==="god")return entry.portrait;if(entry.type==="pet")return petImage(entry.id);return null;}
 function render(){
  const profile=wallet.snapshot(),state=ownedState(),effects=modifiers();
  $("temple-store-name").textContent=profile.name?"Templo de "+profile.name:"Tu templo personal";$("temple-store-balance").textContent=profile.balance.toLocaleString("es-ES")+" CR DISPONIBLES";
  $("temple-loadout").textContent=(item(state.god)?.name||"Sin dios equipado")+" · "+(item(state.pet)?.name||"Sin mascota")+" · Bono de racha ×"+effects.comboMultiplier.toLocaleString("es-ES")+" · Premios ×"+effects.winMultiplier.toLocaleString("es-ES");
  const art=templeArt(state.decor);$("temple-preview-art").innerHTML=art;
  document.body.style.setProperty("--temple-decoration-image",'url("data:image/svg+xml,'+encodeURIComponent(art)+'")');document.body.dataset.templeDecor=state.decor.length?"equipped":"none";
  const focused=document.activeElement?.dataset?.templeItem,grid=$("temple-store-items");grid.replaceChildren();
  for(const entry of catalog.filter(entry=>entry.type===category)){
   const purchased=state.owned.includes(entry.id),equipped=entry.type==="decor"?state.decor.includes(entry.id):state[entry.type]===entry.id;
   const card=document.createElement("article");card.className="temple-item"+(equipped?" is-equipped":"");card.style.setProperty("--item-color",entry.color);
   const portrait=document.createElement("div");portrait.className="temple-item-art";
   const src=imageFor(entry);if(src){const img=document.createElement("img");img.src=src;img.alt="";portrait.append(img);}else portrait.innerHTML='<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 8L86 30L80 73L50 94L20 73L14 30Z" fill="'+entry.color+'" stroke="#fff8" stroke-width="2"/><path d="M50 8V94M14 30H86L50 60ZM20 73L50 60L80 73" fill="none" stroke="#ffffff70" stroke-width="2"/></svg>';
   const heading=document.createElement("h2");heading.textContent=entry.name;const detail=document.createElement("p");detail.textContent=entry.detail;
   const status=document.createElement("small");status.textContent=equipped?"EQUIPADO":purchased?"EN TU COLECCIÓN":entry.price+" CR · COMPRA ÚNICA";
   const button=document.createElement("button");button.className="wallet-action";button.type="button";button.dataset.templeItem=entry.id;button.textContent=purchased?(equipped?"QUITAR":"EQUIPAR"):"COMPRAR · "+entry.price+" CR";
   button.disabled=!wallet.isReady()||isSpinning||window.CreditShop.isBusy()||(!purchased&&profile.balance<entry.price);
   button.addEventListener("click",()=>{try{if(purchased)wallet.equipTempleItem(entry.id,!equipped);else wallet.buyTempleItem(entry.id);$("temple-store-feedback").textContent=entry.name+(purchased?(equipped?" guardado en tu colección.":" equipado."):" comprado y equipado.");renderRunHud();saveArcadeProgress();}catch(error){$("temple-store-feedback").textContent=error.message;}});
   card.append(portrait,heading,detail,status,button);grid.append(card);
  }
  if(focused)grid.querySelector('[data-temple-item="'+focused+'"]')?.focus();
  const hud=$("temple-companion-hud");hud.replaceChildren();hud.hidden=!state.god&&!state.pet;
  for(const id of [state.god,state.pet].filter(Boolean)){const entry=item(id);const badge=document.createElement("div"),img=document.createElement("img"),label=document.createElement("span");img.src=imageFor(entry);img.alt="";label.textContent=entry.name+" · "+(entry.type==="god"?"RACHA ×"+entry.comboMultiplier.toLocaleString("es-ES"):"PREMIOS ×"+entry.winMultiplier.toLocaleString("es-ES"));badge.append(img,label);hud.append(badge);}
 }
 function react(won){const state=ownedState();if(!state.pet)return;const hud=$("temple-companion-hud");clearTimeout(reactionTimer);hud.dataset.reaction=won?"win":"loss";reactionTimer=setTimeout(()=>delete hud.dataset.reaction,1200);}
 const hud=document.createElement("aside");hud.id="temple-companion-hud";hud.className="temple-companion-hud";hud.setAttribute("aria-label","Dios y mascota equipados");document.querySelector(".session-strip").insertAdjacentElement("afterend",hud);
 $("nav-store").addEventListener("click",()=>window.CreditShop.open("store"));$("temple-store-return").addEventListener("click",()=>window.CreditShop.close());
 for(const button of document.querySelectorAll("[data-store-filter]"))button.addEventListener("click",()=>{category=button.dataset.storeFilter;for(const option of document.querySelectorAll("[data-store-filter]"))option.setAttribute("aria-pressed",String(option===button));render();});
 document.addEventListener("profile:wallet-change",render);document.addEventListener("temple:state-change",()=>{if(window.CreditShop.isOpen())render();});
 window.TempleStore=Object.freeze({render,modifiers,react});render();renderRunHud();
})();
