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

// Creo due array che hanno un numero di elementi diversi.

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
