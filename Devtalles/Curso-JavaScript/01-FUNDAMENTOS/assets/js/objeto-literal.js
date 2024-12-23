let personaje= {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },

    trajes: ['mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, Calofornia'
    }
};


console.log(personaje);
console.log('Nombre', personaje.nombre);

console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords.lat);

console.log('No.trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[ personaje.trajes.length -1]);


const x = 'vivo';
console.log('Vivo', personaje[x]);


