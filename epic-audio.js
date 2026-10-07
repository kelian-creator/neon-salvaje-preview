/* Banda sonora instrumental original, sintetizada sin voces ni descargas. */
window.EpicAudio = {
 note(frequency, duration=.5, volume=.035, type="triangle", delay=0) {
  if (!soundEnabled || document.hidden || pauseStartedAt || !audioContext || audioContext.state !== "running") return;
  const ctx=audioContext, now=ctx.currentTime+delay, oscillator=ctx.createOscillator(), gain=ctx.createGain(), filter=ctx.createBiquadFilter();
  oscillator.type=type; oscillator.frequency.value=frequency;
  filter.type="lowpass";filter.frequency.value=type==="sawtooth"?1100:3000;
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(volume,now+.035);
  gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
  oscillator.connect(filter);filter.connect(gain);gain.connect(ctx.destination);
  oscillator.start(now);oscillator.stop(now+duration+.02);
  oscillator.onended=()=>{oscillator.disconnect();filter.disconnect();gain.disconnect();};
 },
 drum(power=1) {
  if (!soundEnabled || document.hidden || pauseStartedAt || !audioContext || audioContext.state!=="running") return;
  const ctx=audioContext,t=ctx.currentTime,o=ctx.createOscillator(),g=ctx.createGain();
  o.frequency.setValueAtTime(145,t);o.frequency.exponentialRampToValueAtTime(35,t+.28);
  g.gain.setValueAtTime(.09*power,t);g.gain.exponentialRampToValueAtTime(.0001,t+.55);
  o.connect(g);g.connect(ctx.destination);o.start();o.stop(t+.56);o.onended=()=>{o.disconnect();g.disconnect();};
 },
 impact(kind) {
  if(kind==="loss"){this.drum(.6);this.note(146.83,.24,.035);this.note(110,.36,.03,"triangle",.09);return;}
  if(kind==="nemesis"){this.drum(1.4);[49,58.27,73.42].forEach(f=>this.note(f,1.1,.035,"sawtooth"));return;}
  this.drum(kind==="top"?1.4:1);
  const notes=kind==="top"?[293.66,369.99,440,587.33,739.99]:[293.66,349.23,440,587.33];
  notes.forEach((f,i)=>this.note(f,.7,.042,"triangle",i*.085));
 },
 start() {
  clearInterval(musicInterval);let step=0;
  const tick=()=>{
   if (!soundEnabled || document.hidden || pauseStartedAt || !matchActive) return;
   const roots=darkMode?[65.41,51.91,58.27,49]:[73.42,58.27,87.31,65.41];
   const base=roots[Math.floor(step/16)%4],beat=step%16;
   const duck=deityPresence.hidden?1:.3;
   if(beat===0){[1,1.5,2.4].forEach(r=>this.note(base*r,2.4,.014*duck,"sawtooth"));this.drum(.7*duck);}
   if(beat%4===0)this.note(base,.6,.03*duck);
   if(beat===8)this.drum(.5*duck);
   const motif=darkMode?[2,3,2.4,2,1.5,2,3,2.4]:[2,3,4,3,2.4,3,4.8,4];
   if(beat%2===0)this.note(base*motif[beat/2],.43,.018*duck,"triangle");
   step++;
  };
  tick();musicInterval=setInterval(tick,60000/(darkMode?84:104)/4);
 }
};
window.TempleSpectacle = {
 timer:null,
 pulse(className, duration=550) {
  const stage=document.querySelector(".machine");
  if(!stage)return;stage.classList.remove(className);void stage.offsetWidth;stage.classList.add(className);
  setTimeout(()=>stage.classList.remove(className),duration);
 },
 result(won,ratio) {
  if(!won){this.pulse("temple-shake");EpicAudio.impact("loss");return;}
  if(ratio<15)return;
  EpicAudio.impact(ratio>=50?"top":"win");this.pulse("temple-victory",1600);
  const layer=document.createElement("div");layer.className="temple-radiance"+(ratio>=50?" temple-radiance--top":"");layer.setAttribute("aria-hidden","true");
  for(let i=0;i<(ratio>=50?28:16);i++){const coin=document.createElement("i");coin.textContent=i%3?"✦":"◆";coin.style.setProperty("--angle",(i*137.5)+"deg");coin.style.setProperty("--travel",(150+i%5*35)+"px");coin.style.setProperty("--delay",(i%4*.07)+"s");layer.append(coin);}
  document.body.append(layer);setTimeout(()=>layer.remove(),2400);
 },
 character(id) {
  this.clear();document.body.dataset.manifestation=id;
  if(id==="nemesis")EpicAudio.impact("nemesis");
  this.timer=setTimeout(()=>this.clear(),2450);
 },
 clear(){clearTimeout(this.timer);delete document.body.dataset.manifestation;}
};
