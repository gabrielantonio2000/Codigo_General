const persona = {
  nombre: 'gabriel',
  apellido: 'oliva',
  edad: 23,
  direccion: {
    ciudad: 'Guatemala',
    lat: 14.512,
    lng: 15.1425
  }
}


const persona2 = { ...persona };
persona2.nombre= 'peter'

console.log(persona);
//console.table(persona);



console.log(persona2);    