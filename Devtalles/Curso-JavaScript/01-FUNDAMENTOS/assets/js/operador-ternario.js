// dias de la semana abrimos a las 11,
// pero los dias de la semana abrimos a las 9
// Entra a  un sitio webkitURL, para consultar si está abierto hoy 

const dia= 6;   //0: domingo... 1:lunes....

const horaActual=11;

let horaApertura; 
let mensaje; //ESta abierto, esta cerrado, hoy abrimos a las x


//evaluamos si es sabado o domingo

// if (dia===0 || dia===6){


//     if ([0,6].includes(dia) ) {
//     console.log('Fin de semana');
//     horaApertura= 9;
// } else{
//     console.log('Día de semana');
//     horaApertura= 11;
// }  


horaApertura= ([0,6].includes(dia)) ? 9 : 11;



// if(horaActual>= horaApertura){
//     mensaje= 'Está abierto'
// }else{ 
//     mensaje= `Está cerrado, hoy abrimos a las ${horaApertura}`  ;

// }

mensaje= (horaActual>= horaApertura) ? 'Esta abierto' : `Está cerrado, hoy trabajamos a las ${horaApertura};`


console.log({horaApertura,mensaje})