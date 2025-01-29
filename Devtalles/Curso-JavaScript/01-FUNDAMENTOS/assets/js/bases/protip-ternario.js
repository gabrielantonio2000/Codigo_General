// const elMayor = (a,b) =>{
//     return (a>b) ? a : b;
// }
// se puede de dos formas trabajar funcions en flecha, si tiene solo un return
// se puede hacer lo que hice abajo
const elMayor = (a,b) => ( a>b) ? a : b;
console.log (elMayor (10,15));



//esta es otra función

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';
console.log( tieneMembresia(false));


const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Hulk',
    amigo ? 'Thor' : 'Loki'
];
console.log ( amigosArr);


//otro uso

const nota = 95; // A+ A  B+

const grado = nota >= 95 ? 'A+' :
nota >= 90 ? 'A' :
nota >= 85 ? 'B+' :
nota >= 80 ? 'B':
nota >= 70 ? 'C':  'F';

console.log( {nota,grado});