// Carrello e sconti particolari

/*
Oggi il tuo compito Ã¨ creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietÃ  "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietÃ  "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione Ã¨ gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

// Definizione di oggetti utente
const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

// Array di prezzi e calcolo del totale
const prices = [34, 5, 2, 90];
let totalPrices = 0;
for (i = 0; i < prices.length; i++) {
    totalPrices += prices[i];
}

// Funzione eCommerce che calcola il pagamento
function eCommerce(selectedUser, cartAmount) {
    // Costanti per la spedizione e lo sconto
    const shippingCost = 50;
    const discount = 0.3;

    // Variabili utente, carrello e pagamento
    let user = selectedUser; // Cambia il valore qui per provare se il tuo algoritmo funziona!
    let cart = cartAmount; // il costo del carrello complessivo prima di calcolare la spedizione
    let payment = 0;

    // Condizioni per calcolare il pagamento
    if (cart > 100) {
        // Se il carrello è superiore a 100, verifica se l'utente è un ambasciatore
        payment = user.isAmbassador ? (
            console.log("Sconto applicato a " + user.name + " di $" + (cart * discount)),
            cart - (cart * discount)
        ) : cart;
    } else {
        // Se il carrello è inferiore a 100, verifica se l'utente è un ambasciatore
        payment = user.isAmbassador ? cart - (cart * discount) + shippingCost : cart + shippingCost;
    }

    // Stampa dei dettagli del pagamento
    console.log("Il totale complessivo del carrello dell'utente: " + user.name + ", é: " + cart + "$.");
    console.log("Il totale dovuto ammonta a: " + payment + "$.");
}

// Chiamata della funzione con l'utente e il totale dei prezzi
eCommerce(amy, totalPrices);

let users = [];
let ambassadors = [];
users.push(paul,marco,amy);

for (let i = 0; i < users.length; i++) {
    if (users[i].isAmbassador === true) {
        console.log(users[i].name + " " + users[i].lastName + " é un ambassador");
        ambassadors.push(users[i]);
    } else {
        console.log(users[i].name + " " + users[i].lastName + " non é un ambassador");
    }
}
console.log(ambassadors);
