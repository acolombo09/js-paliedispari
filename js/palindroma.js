/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
(una parola che si legge allo stesso modo anche da destra versi sinistra, 
ad esempio anna, otto).

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

// console log solo per dividere i risultati a console dei due esercizi.
console.log("------------------------------------------------------------------------");

// Chiedo all'utente di inserire una parola tramite prompt (oppure no).

let userWord = prompt("Inserisci una parola");
console.log(`La parola inserita è ${userWord}`);

// // Prendo una parte di una stringa e la trasformo in un array di lettere.

let lettersArray = userWord.split("");
let lettersArrayRev = userWord.split("");

// Creo una funzione per capire se la parola inserita è palindroma.
let result = "";

for (let i = 0; i < lettersArray.length; i++) {
  
  result += lettersArray[i] + " ";
  console.log(lettersArray[i]); // stampa ogni lettera dell'array
}

// Faccio in modo di leggere questo array di lettere al contrario (i++, i--).
let resultRev = "";

for (let i = lettersArrayRev.length - 1; i >= 0; i--) {

  resultRev += lettersArrayRev[i] + " ";
  console.log(lettersArrayRev[i]); // stampa ogni lettera dell'array al contrario
}

// Una volta letto l'array al contrario, concateno i due array per confrontarli con l'originale.
// Se sono uguali, allora la parola è palindroma, altrimenti no.

if (result == resultRev) {
  console.log("La parola è PALINDROMA");
  } else {
    console.log("La parola NON è PALINDROMA");
}
