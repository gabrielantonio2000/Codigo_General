// dias de la semana abrimos a las 11,
// pero los dias de la semana abrimos a las 9
// Entra a  un sitio webkitURL, para consultar si está abierto hoy 

const dia= 0;   //0: domingo... 1:lunes....

const horaActual=10;

let horaApertura; 
let mensaje; //ESta abierto, esta cerrado, hoy abrimos a las x


//evaluamos si es sabado o domingo

if (dia===0 || dia===6){
    console.log('Fin de semana');
    horaApertura= 9;
} else{
    console.log('Día de semana');
    horaApertura= 11;
}    

console.log({horaApertura})