// function crearPersona( nombre, apellido){
// return {
//     nombre: nombre,
//     apellido: apellido
// }
// }


// const persona = crearPersona( 'Gabriel', 'Antonio');

// console.log (persona);

//crear esto como una función de flecha

const  crearPersona = ( nombre, apellido) =>{
    return {nombre, apellido}
}

const persona = crearPersona ( 'gabriel ', 'antonio');
console.log( persona);




function imprimeArgumentos (){
    console.log( arguments);
}

const imprimeArgumentos2 = (...args ) => {
    console.log ({edad,args})
}


imprimeArgumentos2( 10, true, false, 'GAbriel');