// let a= 2;

// if(a>10){
//     console.log( 'A es mayor o igual a 10');

// } else{
//     console.log( 'A es menor a 10');
// }

// console.log ('Fin de programa')
// const hoy= new Date();
// console.log( hoy);

// let dia= hoy.getDate();
// console.log({dia});

// if (dia === 0){
//     console.log('Domingo');
// } else{
//     console.log('No es domingo'); 
// }

dia=0;
const diasLetras={

0:  'domingo', 
1:  'lunes',
2:  'martes', 
3:  'miercoles', 
4:  'jueves',
5:  'viernes', 
6:  'sabado'
}

const diasLetras2=['domingo','lunes','martes', 'miercoles', 'jueves','viernes', 'sabado'];
    
console.log( diasLetras2[dia] || 'Día no definido');