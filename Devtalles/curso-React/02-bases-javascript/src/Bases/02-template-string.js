const nombre = 'gabriel';
const apellido = 'oliva';

const nombreCompleto = `${nombre}  ${apellido}`

console.log(nombreCompleto);


function getSaludo() {
  
  return 'Hola ' + nombre ;
}

console.log( `Este es un saludo: ${ getSaludo(nombre) }`)