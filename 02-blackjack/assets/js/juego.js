/**
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C","D","H","S"];
const especiales = ["A","J","Q","K"];

// Esta función crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(`${i}${tipo}`);
        }
    }

    for(let tipo of tipos){
        for (const especial of especiales) {
            deck.push(`${especial}${tipo}`);
        }
    }

    // console.log(deck);
    
    deck = _.shuffle(deck);

    console.log(deck);
    return deck;
};


crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
    if(deck.length === 0){
        throw "No hay cartas en el deck";
    }

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);// carta de la baraja
    return carta;
};

pedirCarta();


// 50. Pedir carta