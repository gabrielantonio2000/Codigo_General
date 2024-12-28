function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 10;
    //en una función después de su return que es el punto limite, si agregamos al abajo
    //del return ya no lo va a tomar
    console.log('soy un codigo que esta después del return');
}


const saludar2= function(nombre){
    console.log('hola ' + nombre);
}

//const retornoDeSaludar= saludar('Gabriel', 40, true, 'Guatemala');
//console.log({retornoDeSaludar});

//funciones de flecha acá abajo
const saludarFlecha= () =>{
    console.log('Hola Flecha');
}
const saludarFlecha2= (nombre) =>{
    console.log('Hola ' + nombre);
}

//saludarFlecha();
//saludarFlecha2('Jake');


function sumar(a,b){
    return a+b;
}

console.log( sumar(1,2));



//esta es una función de flecha
const sumar2 = (a,b) =>{
    return a+b;
}

console.log( sumar2(2,4));

//la función de flecha se puede resumir más de esta forma cuando solo hay una linea

const sumar3 = (a,b) => a+b;
console.log( sumar3(10,10));


function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio ());


//ejercicio: simplificar la función anterior

const getAleatorio2 =  () => {
    return Math.random();
}  



console.log(getAleatorio2 ());

