/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

// Inizio col dare la possibilità all'utente di scegliere tra pari o dispari con un prompt.
// (se utente sceglie pari, pc è dispari - se utente sceglie dispari, pc è pari).

const userChoice = prompt("Scegli pari o dispari:");

// Genero un numero random tra 1 e 5 per il computer (tramite funzione).

function userNumber(){
  const num1 = Math.floor(Math.random() * 5) + 1;

  console.log("Numero random dell'utente è ", num1);

  return num1;
}

function pcNumber(){
  const num2 = Math.floor(Math.random() * 5) + 1;

  console.log("Numero random del pc è ", num2);

  return num2;
}

// Eseguo la somma dei due numeri.

function sumNumbers (userNumber, pcNumber) {
  const result = userNumber + pcNumber;

  return result;
}

const userNum = userNumber();
const pcNum = pcNumber();
const sum = sumNumbers(userNum, pcNum);

const finalSum = sumNumbers(userNumber, pcNumber);

console.log(`Il numero dell'utente è ${userNum}, il numero del computer è ${pcNum}.`);
console.log(`La somma dei due numeri è ${sum}.`);

// Stabilisco se la somma dei due numeri è pari o dispari (tramite funzione).
function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

const isSumEven = isEven(sum);
const isSumOdd = isOdd(sum);

if (isSumEven) {
  console.log("La somma dei numeri è pari.");
}

if (isSumOdd) {
  console.log("La somma dei numeri è dispari.");
}

// Dichiaro chi ha vinto tra utente e pc in base alla scelta iniziale di pari o dispari.

let winner;

if ((isSumEven && userChoice === "pari") || (isSumOdd && userChoice === "dispari")) {
  winner = "utente";
} else {
  winner = "computer";
}

console.log(`Il vincitore è il ${winner}.`);

// console log solo per dividere i risultati a console dei due esercizi.
console.log("------------------------------------------------------------------------");