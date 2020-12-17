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


// print the whole numbers

var numbers = [];

for(var n = 1; n <= 100; n++) {
    numbers.push(n);
}

for(var index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

// define multiples

// assign word the correct multiple
