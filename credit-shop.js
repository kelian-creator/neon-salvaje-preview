(() => {
 "use strict";
 const $=id=>document.getElementById(id),wallet=window.ProfileWallet,config=window.ProfileConfig;
 let ownsPause=false,busy=false;
 const day=()=>new Intl.DateTimeFormat("en-CA",{timeZone:config.timeZone,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
 function message(value){$("wallet-feedback").textContent=value;}
 function render(){
  const profile=wallet.snapshot(),ad=window.AdLayer?.getStatus();
  const offer=config.timeOffers[0];
  $("time-bank").textContent=profile.timeSeconds+" segundos guardados";
  $("time-offer-copy").textContent="Añade "+offer.seconds+" segundos por "+offer.cost+" créditos del juego.";
  $("buy-game-time").textContent="COMPRAR +"+offer.seconds+" S · "+offer.cost+" CR";
  $("apply-saved-time").disabled=busy||!matchActive||!runState.pathChoice||!profile.timeSeconds||isSpinning||!wallet.isReady();
  $("buy-game-time").disabled=busy||profile.balance<offer.cost||!wallet.isReady();
  $("nav-player").textContent=profile.name||"MI PERFIL";$("nav-balance").textContent=profile.balance.toLocaleString("es-ES")+" CR";
  $("shop-balance").textContent=profile.balance.toLocaleString("es-ES")+" CR";$("profile-name").textContent=profile.name||"Jugador";$("profile-id").textContent=profile.id;
  if(document.activeElement!==$("profile-alias"))$("profile-alias").value=profile.name;
  $("profile-status").textContent=!profile.storageAvailable?"No se puede guardar el saldo en este dispositivo.":profile.cloudLinked?(profile.needsSync?"Cuenta de Google · movimientos pendientes de sincronizar":(wallet.isReady()?"Cuenta de Google · perfil vinculado":"Cuenta de Google vinculada · el juego en la nube está pendiente de activar")):"Perfil guardado en este dispositivo. Vincula Google para recuperarlo en otros móviles.";
  $("google-signin").textContent=profile.cloudLinked?"CAMBIAR CUENTA DE GOOGLE":"CONTINUAR CON GOOGLE";$("google-signin").disabled=busy||!document.body.classList.contains("session-locked")||!!ad?.busy;
  $("wallet-sync").hidden=!profile.cloudLinked;$("wallet-sync").disabled=busy;
  const collected=day()<=profile.lastDailyDay;
  $("daily-credit-status").textContent=collected?"Regalo de hoy ya recibido. Vuelve mañana para +20 CR.":"Tienes 20 créditos esperándote. Un regalo al día, sin acumular días ausentes.";
  $("claim-daily").disabled=collected||busy||!wallet.isReady();$("claim-daily").textContent=collected?"HOY YA RECIBIDO":"RECOGER +20 CR";
  $("shop-watch-ad").disabled=busy||!!ad?.busy||!window.GameAdRewards?.canClaim();
  $("shop-ad-status").textContent=ad?.mode==="demo"?"Demostración local: +60 CR virtuales, sin un anuncio comercial.":"Completa un anuncio para sumar 60 créditos a tu perfil. Cerrarlo antes no da créditos.";
  const history=$("wallet-history");history.replaceChildren();
  const labels={welcome:"Bienvenida",migration:"Saldo anterior",daily:"Regalo diario",advertisement:"Anuncio completado",prize:"Premio",wager:"Tirada",inactivity:"Inactividad","recovery-win":"Segunda oportunidad","recovery-penalty":"Penalización","temple-purchase":"Artículo del templo","temple-equip":"Equipamiento","time-purchase":"Compra de tiempo","time-use":"Tiempo aplicado",purchase:"Compra",admin:"Abono del templo"};
  for(const entry of profile.ledger.slice(0,30)){const li=document.createElement("li"),label=document.createElement("span"),amount=document.createElement("strong");label.textContent=(labels[entry.kind]||"Movimiento")+" · "+new Date(entry.at).toLocaleString("es-ES");amount.textContent=(entry.amount>0?"+":"")+entry.amount+" CR"+(entry.timeDelta?" · "+(entry.timeDelta>0?"+":"")+entry.timeDelta+" s":"");li.append(label,amount);history.append(li);}
  const catalog=window.CreditPurchases?.products()||[];
  for(const button of document.querySelectorAll("[data-credit-product]")){
   const product=catalog.find(item=>item.id===button.dataset.creditProduct);
   button.disabled=busy||!window.CreditPurchases?.ready()||!product;
   button.textContent=product&&window.CreditPurchases?.ready()?"COMPRAR":"PRÓXIMAMENTE";
   if(product)button.closest("article").querySelector(".pack-price").textContent=product.price;
  }
  $("purchase-status").textContent=window.CreditPurchases?.ready()?"Compra mediante Google Play. Los créditos o el tiempo se abonan a tu cuenta tras verificar el pago.":"Las compras todavía no están activadas. Estos son los paquetes previstos.";
 }
 function open(view="credits"){
  const target=view==="store"?"store":"credits";
  if(busy||window.AdLayer?.getStatus().busy||isSpinning){showToast("Espera a que termine la acción actual.");return;}
  if([...document.querySelectorAll('[role="dialog"]')].some(el=>!el.closest("[hidden]")&&!el.closest("#mobile-pause"))){showToast("Cierra primero la ventana del templo.");return;}
  if(matchActive && !runState.pathChoice){showToast("Elige tu camino antes de abrir la cartera.");return;}
  if(document.body.dataset.view==="game"){ownsPause=matchActive&&!pauseStartedAt;if(ownsPause)window.MobileRuntime.pause();}
  document.body.dataset.view=target;$("credit-screen").hidden=target!=="credits";$("temple-store-screen").hidden=target!=="store";
  for(const [id,route] of [["nav-game","game"],["nav-credits","credits"],["nav-store","store"]]){if(route===target)$(id).setAttribute("aria-current","page");else $(id).removeAttribute("aria-current");}
  render();window.TempleStore?.render();$(target==="store"?"temple-store-title":"credit-title").focus();
 }
 function close(){
  if(busy||window.AdLayer?.getStatus().busy){message("Espera a que termine la operación.");return;}
  document.body.dataset.view="game";$("credit-screen").hidden=true;$("temple-store-screen").hidden=true;$("nav-store").removeAttribute("aria-current");$("nav-credits").removeAttribute("aria-current");$("nav-game").setAttribute("aria-current","page");
  if(ownsPause){ownsPause=false;void window.MobileRuntime.resume();}
  $("nav-game").focus();
 }
 async function perform(task){if(busy)return;busy=true;render();try{await task();}catch(error){message(error.message||"No se pudo completar la operación.");}finally{busy=false;render();}}
 for(const product of config.timeProducts){
  const article=document.createElement("article");article.className="credit-pack";
  const icon=document.createElement("span");icon.className="pack-emblem";icon.textContent="⌛";icon.setAttribute("aria-hidden","true");
  const title=document.createElement("h3");title.textContent=product.label;
  const price=document.createElement("strong");price.className="pack-price";price.textContent=product.referencePrice;
  const copy=document.createElement("p");copy.textContent="Más tiempo para tentar a la fortuna";
  const button=document.createElement("button");button.type="button";button.className="wallet-action";button.dataset.creditProduct=product.id;
  button.addEventListener("click",()=>void perform(async()=>{const purchased=await window.CreditPurchases.buy(product.id);if(purchased){const applied=window.GameTime.addSavedTime();message(applied?"¡Tiempo comprado y añadido al reloj!":"Tiempo comprado y guardado para la siguiente partida.");}else message("Compra cancelada o pendiente; sin tiempo añadido.");}));
  article.append(icon,title,price,copy,button);$("time-packs").append(article);
 }
 for(const [index,product] of config.products.entries()){
  const article=document.createElement("article");article.className="credit-pack";
  const icon=document.createElement("span");icon.className="pack-emblem";icon.textContent=["✦","◆","♛"][index];icon.setAttribute("aria-hidden","true");
  const title=document.createElement("h3");title.textContent=product.credits+" CR";
  const price=document.createElement("strong");price.className="pack-price";price.textContent=product.referencePrice;
  const copy=document.createElement("p");copy.textContent=["Una nueva oportunidad","Más giros, más sorpresas","Una reserva legendaria"][index];
  const button=document.createElement("button");button.className="wallet-action";button.type="button";button.dataset.creditProduct=product.id;button.textContent="PRÓXIMAMENTE";button.disabled=true;
  button.addEventListener("click",()=>void perform(async()=>message(await window.CreditPurchases.buy(product.id)?"Compra verificada. Créditos añadidos a tu perfil.":"Compra cancelada o pendiente; sin créditos añadidos.")));
  article.append(icon,title,price,copy,button);$("credit-packs").append(article);
 }
 $("nav-credits").addEventListener("click",open);$("nav-profile").addEventListener("click",open);$("nav-game").addEventListener("click",close);$("shop-return-game").addEventListener("click",close);
 document.querySelector(".app-wordmark").addEventListener("click",event=>{event.preventDefault();close();});
 $("profile-name-form").addEventListener("submit",event=>{event.preventDefault();if(matchActive){message("Puedes cambiar tu nombre al terminar la partida.");return;}try{wallet.setName($("profile-alias").value);playerNameInput.value=wallet.snapshot().name;playerState.name=wallet.snapshot().name;saveArcadeProgress();message("Nombre guardado. Tu identificador y saldo se conservan.");}catch(error){message(error.message);}});
 $("apply-saved-time").addEventListener("click",()=>void perform(async()=>message(window.GameTime.addSavedTime()?"Tiempo guardado añadido al reloj.":"El tiempo se conserva para tu siguiente partida.")));
 $("buy-game-time").addEventListener("click",()=>void perform(async()=>{const offer=config.timeOffers[0];wallet.buyTime(offer.seconds);const applied=window.GameTime.addSavedTime();saveArcadeProgress();message(applied?"¡Tiempo añadido a la partida!":"Tiempo guardado para tu próxima partida.");}));
 $("claim-daily").addEventListener("click",()=>void perform(async()=>message(await wallet.daily()?"¡+20 créditos! Fortuna te espera.":"Ya has recibido el regalo de hoy.")));
 $("shop-watch-ad").addEventListener("click",async()=>{if(window.AdLayer.getStatus().mode==="off"){window.AdLayer.openSettings();return;}await perform(async()=>message(await window.AdLayer.requestRewarded("credits")?"¡+60 créditos guardados en tu cartera!":"Anuncio cerrado o no disponible. No se ha aplicado ningún cambio."));});
 $("google-signin").addEventListener("click",()=>void perform(async()=>{if(!window.ProfileAuth)throw new Error("La conexión con Google está iniciándose.");await window.ProfileAuth.signIn();}));
 $("wallet-sync").addEventListener("click",()=>void perform(async()=>{if(!await wallet.sync())throw new Error("No se pudo sincronizar. Conservamos los movimientos pendientes.");message("Saldo sincronizado.");}));
 document.addEventListener("profile:wallet-change",render);document.addEventListener("profile:sync-error",event=>message(event.detail));document.addEventListener("ads:state-change",()=>queueMicrotask(render));document.addEventListener("temple:state-change",render);
 document.addEventListener("keydown",event=>{if(document.body.dataset.view!=="game"&&event.key==="Escape"&&$("ad-settings").hidden&&$("ad-presentation").hidden){event.preventDefault();close();}});
 window.CreditShop=Object.freeze({open,close,isOpen:()=>document.body.dataset.view!=="game",isBusy:()=>busy,render,message});render();
})();
