/* Signatures instrumentales du panteón. Sin voces. */
window.CharacterAudio={
 stop(){window.TempleSpectacle?.clear();},
 play(id){
  window.TempleSpectacle?.character(id);
  if(id==="nemesis")return;
  const pitches={fortuna:587.33,destino:293.66,aureo:440,cristal:880,vesta:220,ignis:146.83,astra:739.99,corvin:98,volta:659.25,forja:196,noctis:110,chrono:523.25,solara:698.46};
  const f=pitches[id]??293.66;
  window.EpicAudio?.drum(.7);
  [1,1.5,2].forEach((r,i)=>window.EpicAudio?.note(f*r,.42,.024,"triangle",i*.07));
 }
};