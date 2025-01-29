const regresaTrue = ()=>{

    console.assert.toString( 'Regresa true');
    return true;
}


const regresaFalse = () =>{
    console.log('Regresa false');
    return false;
}

console.warn('Not a la negación');
console.log(!true);

console.log(!regresaFalse());



console.warn('And');

console.log(true && true);
console.log(true && !false);


console.log('-------------------');
console.log(regresaTrue() && regresaFalse()  );

regresaTrue() && regresaFalse ();


console.warn ('OR');

console.log( true || false);

console.log( regresaTrue () || regresaFalse());





console.warn ('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1 = true && 'Hola mundo' && 150;
const a2= 'Hola' && 'Mundo' && soyFalso;
const a3= soyFalso || 'Ya no soy falso';
const a4= soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5= soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de nuevo';
console.log({a1,a2, a3, a4, a5});


