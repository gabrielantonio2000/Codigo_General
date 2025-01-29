// 2C = TWO OF CLUBS
// 2D= TWO OF DIAMONDS
// 2H = TWO OF HEARTS
// 2S = TWO OF SPADES

let deck = [];

const tipos = ['C', 'D','H','S'];
const especiales = ['A','J','Q','K'];
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
    
    console.log (carta);  //carta debe de ser de la baraja
    return '2C';
};