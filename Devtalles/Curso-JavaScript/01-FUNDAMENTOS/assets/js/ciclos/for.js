const heroes= ['Batman', 'Superman', 'Mujer Maravilla','Aquaman'];

console.warn('For tradicional');

for(let i= 0; i<heroes.length; i++    ){
    console.log(heroes[i]);
}

console.warn('For in');


//esta variante es para hacer más limpio mi código
for (let i in heroes){
    console.log(heroes[i]);
}

console.warn('For off');

for( let i of heroes){
    console.log (i);
}
