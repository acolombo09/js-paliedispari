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

// Chiedo all'utente di inserire una parola tramite prompt.
// Devo inserire un controllo per farmi dare solo parole.



// Creo una funzione per capire se la parola inserita è palindroma.
// Prendo una parte di una stringa e la trasformo in un array di lettere.
// Faccio in modo di leggere questo array di lettere al contrario (i++, i--).
// Una volta letto l'array al contrario, concateno i due array per confrontarli con l'originale.
// Se sono uguali, allora la parola è palindroma, altrimenti no.

/* Altro modo potrebbe essere semplicemente fare ciclo al contrario e confrontarlo, 
in quanto di base una stringa è un array di caratteri e posso lavorare con gli indici.
*/

const lista1 = [];
const lista2 = [];

for(let i = 0; i < 10; i++){
  // voglio creare una lista di numeri col push.
  //in questo caso da 0 a 99 (floor).
  // potrei anche fare da 1 a 100 con ceil.
  lista1.push(Math.floor(Math.random() * 100));
  // console.log(lista1);
}

for(let i = 0; i < 23; i++){
  // voglio creare una lista di numeri col push.
  //in questo caso da 0 a 99 (floor).
  // potrei anche fare da 1 a 100 con ceil.
  lista2.push(Math.floor(Math.random() * 100));
  // console.log(lista2);
}

// voglio capire quale delle lue liste è la più lunga.
const differenzaListe = lista1.length - lista2.length;
// console.log(differenzaListe);

/* dato che il risultato è negativo (-13), deduco che 
  la prima lista è minore della seconda (lo so già)

  Dopodichè aggiungo elementi all'array (lista) più corto
  fino a quando ne avrà tanti quanti l'altro.
*/

/* siccome la differenzaListe è un numero negativo e non potrei
  fare cicli in negativo, con suggerimento di Florian, utilizzo la funzione math.abs
  per trasformare tutti i numeri negativi in positivi (valore assoluto).
*/

for (let i = 0; i < Math.abs(differenzaListe); i++) {
  if (differenzaListe < 0) {
    lista1.push(20);
  } else {
    lista2.push(20);
  }
}

console.log(lista1);

console.log(lista2);
