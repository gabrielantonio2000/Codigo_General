// 2C = TWO OF CLUBS
// 2D= TWO OF DIAMONDS
// 2H = TWO OF HEARTS
// 2S = TWO OF SPADES

let deck = [];
const tipos = ['C', 'D','H','S'];
const especiales = ['A','J','Q','K'];
// referencias del html
const btnPedir = document.querySelector ('#btnPedir');


const crearDeck = () =>{


for( let i = 2; i <= 10; i++){
    for(let tipo of tipos){
        deck.push( i+tipo);
    }
} 

for (let tipo of tipos ) {
    for (let esp of especiales){
        deck.push (esp + tipo);
    }
}





//console.log( deck);
deck = _.shuffle( deck);
console.log( deck);
return deck;
}

crearDeck();


//FUNCIÓN PARA PEDIR CARTAS

const peidrCarta = ()  => {
    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }

    const carta= deck.pop();

    //console.log (carta);  //carta debe de ser de la baraja
    return carta;
};



    //pedirCarta();
    const valorCarta = (carta) =>{ 

const valor = carta.substring ( 0, carta.length -1);
return  (isNaN(valor)) ? 
        (valor === 'A') ? 11: 10
        :  valor * 1;

//simplificamos todo esto de abajo
// let puntos = 0;

// if (isNaN (valor)){
//         puntos = ( valor === 'A' ) ? 11  :  10;
        
//     //console.log( 'No es un número');
// } else {
//     console.log( 'es un número');
//     puntos = valor * 1;
// }

 


}

// const valor = valorCarta ('AD');
// console.log( {valor}); 






//Eventos

btnPedir.addEventListener('click', () => {

console.log( 'click');
});
