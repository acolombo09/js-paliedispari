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

const userWord = prompt("Inserisci una parola");
console.log(userWord);

// // Prendo una parte di una stringa e la trasformo in un array di lettere.

const lettersArray = userWord.split("");
console.log(lettersArray);

// // Creo una funzione per capire se la parola inserita è palindroma.

// // Faccio in modo di leggere questo array di lettere al contrario (i++, i--).

// for (let i = 0; i < lettersArray.length; i++) {
//   const element = array[i];
  
// }

// for (let i = 0; i < lettersArray.length; i--) {
//   const element = array[i];
  
// }

// Una volta letto l'array al contrario, concateno i due array per confrontarli con l'originale.
// Se sono uguali, allora la parola è palindroma, altrimenti no.

/* Altro modo potrebbe essere semplicemente fare ciclo al contrario e confrontarlo, 
in quanto di base una stringa è un array di caratteri e posso lavorare con gli indici.
*/
