function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
}


const saludar2= function(nombre){
    console.log('hola ' + nombre);
}



saludar2('Antonio');
saludar('Gabriel', 40, true, 'Guatemala');


//funciones de flecha acá abajo


const saludarFlecha= () =>{
    console.log('Hola Flecha');
}

const saludarFlecha2= (nombre) =>{
    console.log('Hola ' + nombre);
}

saludarFlecha();
saludarFlecha2('Jake');