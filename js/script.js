/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */



// assign word the correct multiple

for (var i = 1; i <=100; i++) { // print the numbers list
  if (i%5 === 0 && i%3 === 0) {
    console.log('FizzBuzz'); // assign word the correct multiple

  } else if (i%3 === 0) { // define multiples
    console.log('Fizz'); // assign word the correct multiple

  } else if (i%5 === 0) { // define multiples
    console.log('Buzz'); // assign word the correct multiple

  } else {
    console.log(i); // print the numbers list
  }
}
