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
