let a= 10;
let b= a;
a=30;
console.log({a,b});





let juan = { nombre: 'Juan'};
let ana = {...juan};
ana.nombre= 'Ana';
console.log( {juan, ana});


const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter= {nombre: 'Peter'};
let tony = cambiaNombre( peter);

console.log( {peter,tony});


//mismo ejercicio con operador spreed pero con arreglos

const frutas= ['Manzana', 'Pera', 'Piña'];
//este es un método de romper la referencia
// Lo dejare comentado para que no me de conflicto al hacer pruebas con el otro const otrasFrutas = [...frutas]; 

//para ver que método es mejor si usar .slice o spreed ...
//haremos esto colocar un console.time ('slice); y abajo un console.timeEnd('slice'); para ver como termina
//ahora este es otro método 


console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');



//y ahora para el operadodr spread 

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


//a nivel de rendimiento los 2 funcionan igual depende en que parte del código esten
//ya que si esta arriba el spread es más rápido pero si coloco el slice arriba de spread entonces es más rápido
//entonces es lo mismo pero al gusto puedo usar ya sea spread o slice
// el time y timeEnd sirve para ver el tiempo que se tarda

otrasFrutas.push('Mango');

console.table ({frutas, otrasFrutas});