// Dati utente
let km = prompt('Inserisci il numero di chilometri che vuoi percorrere');
console.log(km)
const age = prompt('Inserisci la tua età');
console.log(age)

// Calcolo biglietto base
let price = km * 0.21
let priceFixed = price.toFixed(2);
console.log(priceFixed + '€')

// Calcolo biglietto per minori
if (age <= 17) {

    let price = km * 0.21
    let sales = price - ((price * 20) / 100)
    let salesFixed = sales.toFixed(2);
    console.log(salesFixed + '€')

}