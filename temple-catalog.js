/* Precios y efectos editables. Decoraciones combinables; un dios y una mascota. */
window.TempleCatalog=Object.freeze([
 {id:"gold",type:"decor",name:"ORO DEL TEMPLO",price:20,color:"#ffd56b",detail:"Molduras y columnas de oro. Sólo decoración."},
 {id:"jewels",type:"decor",name:"JOYAS CELESTES",price:40,color:"#75efff",detail:"Diamantes en las esquinas del santuario. Sólo decoración."},
 {id:"emerald",type:"decor",name:"JARDÍN DE ESMERALDAS",price:60,color:"#6dffb3",detail:"Gemas verdes iluminan las columnas. Sólo decoración."},
 {id:"ruby",type:"decor",name:"CORONA DE RUBÍES",price:80,color:"#ff557e",detail:"Rubíes rojos coronan el templo. Sólo decoración."},
 {id:"astral",type:"decor",name:"BÓVEDA DE AMATISTAS",price:100,color:"#c7a0ff",detail:"Cristales violetas y un cielo de estrellas. Sólo decoración."},
 {id:"god-fortuna",type:"god",name:"FORTUNA",price:120,color:"#ffd56b",portrait:"assets/gods/fortuna.png",comboMultiplier:1.5,detail:"Multiplica ×1,5 el bono de racha. Desde la segunda victoria consecutiva; máximo +37,5%."},
 {id:"god-nemesis",type:"god",name:"NÉMESIS",price:200,color:"#ff739b",portrait:"assets/gods/nemesis.png",comboMultiplier:2,detail:"Multiplica ×2 el bono de racha. Desde la segunda victoria consecutiva; máximo +50%."},
 {id:"god-destino",type:"god",name:"DESTINO",price:300,color:"#b8a3ff",portrait:"assets/gods/destino.png",comboMultiplier:2.5,detail:"Multiplica ×2,5 el bono de racha. Desde la segunda victoria consecutiva; máximo +62,5%."},
 {id:"pet-fox",type:"pet",name:"ZORRO DE JADE",price:60,color:"#6dffb3",winMultiplier:1.05,detail:"Te acompaña y multiplica ×1,05 los premios ganadores de los rodillos (+5%)."},
 {id:"pet-owl",type:"pet",name:"BÚHO ASTRAL",price:140,color:"#c7a0ff",winMultiplier:1.1,detail:"Te acompaña y multiplica ×1,10 los premios ganadores de los rodillos (+10%)."},
 {id:"pet-dragon",type:"pet",name:"DRAGÓN RUBÍ",price:260,color:"#ff557e",winMultiplier:1.15,detail:"Te acompaña y multiplica ×1,15 los premios ganadores de los rodillos (+15%)."}
].map(item=>Object.freeze(item)));
