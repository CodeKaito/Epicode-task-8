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

// EXTRA del 17 Nov
// Scrivi un programma che dato un numero N, generi un array di N numeri casuali e stampi sia l'array ottenuto che quello invertito.
//  Esempio:
// Input: N = 5 // lunghezza array
// Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

function randomArray(num) {
    let array = []
    for (let i = 0; i < num; i++) {
        array.push(Math.floor(Math.random()*num));
    }
    console.log("Questo é l'array ottenuto: " + array);
    console.log("Questo é l'array ottenuto invertito: " + array.reverse());
    return array;
}

randomArray(5);

// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

function sortArray(items, metodo) {
    let newArray = []; // Dichiaro un array vuoto per contenere gli elementi ordinati
    let minValue = items[0]; // Inizializzo il valore minimo con il primo elemento dell'array
    let maxValue = -Infinity; // Inizializzo il valore massimo come infinito
    let valueIndex = 0; // Inizializzo l'indice dell'elemento con valore minimo

    if (metodo === "crescente") {
        while (items.length > 0) { // Effettuo un ciclo finché ci sono ancora elementi nell'array originale
            minValue = items[0]; // Reinizializzo il valore minimo con il primo elemento dell'array
            valueIndex = 0; // Reinizializzo l'indice dell'elemento con valore minimo

            for (let i = 0; i < items.length; i++) { // Itero all'interno degli elementi di items
                if (items[i] < minValue) { // Confronto il valore minimo con il primo elemento dell'array
                    minValue = items[i]; // Assegno il valore trovato alla variabile minValue
                    valueIndex = i; // Assegno ad una variabile valueIndex l'indice dell'elemento trovato cosi da rimuoverlo in un secondo momento
                }
            }
            newArray.push(minValue); // Aggiungo il valore minore all'array ordinato uno alla volta
            items.splice(valueIndex, 1); // Rimuovo l'elemento con valore minimo dall'array originale e riparte l'interazione del while
        }
    } else if (metodo === "decrescente"){
        while (items.length > 0) { // Effettuo un ciclo finché ci sono ancora elementi nell'array originale
            maxValue = items[0]; // Reinizializzo il valore minimo con il primo elemento dell'array
            valueIndex = 0; // Reinizializzo l'indice dell'elemento con valore minimo

            for (let i = 0; i < items.length; i++) { // Itero all'interno degli elementi di items
                if (items[i] > maxValue) { // Confronto il valore minimo con il primo elemento dell'array
                    maxValue = items[i]; // Assegno il valore trovato alla variabile minValue
                    valueIndex = i; // Assegno ad una variabile valueIndex l'indice dell'elemento trovato cosi da rimuoverlo in un secondo momento
                }
            }
            newArray.push(maxValue); // Aggiungo il valore minore all'array ordinato uno alla volta
            items.splice(valueIndex, 1); // Rimuovo l'elemento con valore minimo dall'array originale e riparte l'interazione del while
        }
    }
    // Consollogghiamo l'array ordinato
    console.log(newArray);
    return newArray;
}

sortArray([3, 7, -2, 5, 8, 1, 2, 5, 6, -1], "decrescente");

// function trovaValoreMinimo(array) {
//     // Verifica se l'array è vuoto
//     if (array.length === 0) {
//       return undefined; // Ritorna undefined se l'array è vuoto
//     }
  
//     // Inizializza il valore minimo con il primo elemento dell'array
//     let minimo = array[0];
  
//     // Itera attraverso gli elementi dell'array
//     for (let i = 1; i < array.length; i++) {
//       // Se l'elemento corrente è minore del valore minimo, aggiorna il valore minimo
//       if (array[i] < minimo) {
//         minimo = array[i];
//       }
//     }
  
//     // Ritorna il valore minimo trovato
//     return minimo;
//   }
  
//   // Esempio di utilizzo
//   let numeri = [5, 2, 9, 1, 7];
//   let minimo = trovaValoreMinimo(numeri);
//   console.log("Il valore minimo è:", minimo); // Output: Il valore minimo è: 1

// Variante:
// Prova ad ordinali in modo crescente.
// function sortArray2(array) {
//     array.sort();
//     console.log(array);
// }

// sortArray2([3, 7, -2, 5, 8, 1, 2, 5, 6, -4])

// Operazioni tra array
//   Scrivi un programma che dati:
  
// 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// il tipo di operazione aritmetica da effettuare, una delle seguenti:
// addizione
// sottrazione
// moltiplicazione
// divisione
// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

//   Esempio:
//     Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
//     Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

function operationArray(a, b, operazione) {
    let result = [];
    if (operazione === "+") {
        for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
            result.push(a[i] + b[k]);
        }
        console.log(result);
    } else if (operazione === "-") {
        for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
            result.push(a[i] - b[k]);
        }
        console.log(result);
    } else if (operazione === "*") {
        for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
            result.push(a[i] * b[k]);
        }
        console.log(result);
    } else if (operazione === "/") {
        for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
            result.push(a[i] / b[k]);
        }
        console.log(result);
    }
}

operationArray([1,2], [1,2], "*");

// La tombola magica
//   Scrivi un programma che dato:
  
// un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
// un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
// Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
//   2 numeri uguali => ambo
//   3 numeri uguali => terna
//   4 numeri uguali => quaterna
//   5 numeri uguali => cinquina
//   tutti i numeri uguali => tombola

//   In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
//   in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
//   (generazione numeri random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

function tombolaMagica(randomArray, chosenArray) {
    let resultArray = [];
    for (let i = 0; i < chosenArray.length; i++) {
        if (randomArray.includes(chosenArray[i]) === true) {
            resultArray.push(chosenArray[i]);
        }
    }

    if (resultArray.length === 0 || resultArray.length === 1) {
        console.log("Ritenta, sarai piú fortunato!");
    } else if (resultArray.length === 2) {
        console.log(resultArray + " AMBO!");
    } else if (resultArray.length === 3) {
        console.log(resultArray + " TERNA!");
    } else if (resultArray.length === 4) {
        console.log(resultArray + " QUATERNA");
    } else if (resultArray.length === 5) {
        console.log(resultArray + "CINQUINA!");
    } else if (resultArray.length === chosenArray.length) {
        console.log(resultArray + "TOMBOLA!");
    }
}

function rand() {
    let randomArray = [];
     for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random()*90));
     }
     return randomArray;
}

let computer = rand();
let user = [1, 10, 25, 12, 32, 45, 90, 39, 67, 42]
tombolaMagica(computer, user);

//! M1 - Epicode - JavaScript Extra Training (Marco Longo)

//* ARRAY:
//? Ex.1 (Easy) - Realizzare un programma che costruisca un array di 20 elementi. Ogni elemento dev'essere pari al proprio indice nell'array.
// Es. [0, 1, 2, 3, 4, 5 ... 19]

// for (let i = 0; i < 20; i++) {
//     console.log(i);
// }

//? Ex.2 (Medium) - Realizzare un programma che, dato un array di numeri interi, stampi in console la media di tutti i valori.
// N.B. Utilizza solo i concetti visti a lezione, niente scorciatoie!

// let array = [1,2,3,4];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//     result += array[i]/2;
// }
// console.log(result);

//? Ex.3 (Medium) - Realizzare un programma che rimuova i multipli dispari di 3 dall'array riportato sotto.
// N.B. 18 è un multiplo pari di 3, 21 è un multiplo dispari di 3.
// let array = [20, 31, 15, 78, 48, 27, 61, 51]; 

// let array = [20, 31, 15, 78, 48, 27, 61, 51];
// let result = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         result.push(array[i]);
//     }
// }
// console.log(result);

//? Ex.4 (Hard) - Dato un array di numeri interi (nums) ed un numero intero (target), ritornare i 2 indici degli elementi nell’array nums che, sommati, restituiscano il numero target.
//? Assumere che ogni nums fornito in input accetti solo una soluzione e che questo contenga solo numeri diversi fra loro.
// Esempio:
// Input: nums = [4, 9, 11, 13] , target = 22
// Output: [1,3]

let nums = [4, 9, 11, 13];
let resultArray = [];
let target = 22;
let test = false;

for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
        if (i !== k && nums[i] + nums[k] === target) {
            resultArray.push(i, k);
            test = true; // Imposta test su true quando trovi una soluzione
            break; // Esci dal ciclo interno una volta trovata una soluzione
        }
    }
    if (test) {
        break; // Esci dal ciclo esterno se hai trovato una soluzione
    }
}

console.log(resultArray);

// nums [0, 1, 2, 3, 4, 5, 6]
// Suggerimento: Sapevi che i cicli for possono essere innestati?
