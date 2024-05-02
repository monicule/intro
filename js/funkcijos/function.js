/*
FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas
Input => Function() => Output


*/

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();
console.log(a);

function empty() {
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}

function giveMeSix() {
    return 6;
}

console.log(giveMeFive());
console.log(giveMeSix());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
*/

function intro(name, lastname) {
return 'Laba diena, as esu ' + name + '' + lastname + '!';
}

console.log(intro("Jonas", "Jonaitis"));
console.log(intro("Maryte", "Marytaite"));


/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

console.log(multiply(5, 7));
console.log(multiply(-2, 8));
console.log(multiply(3.14, 2));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas yra Maryte, man 88 metai ir as megstu geles.
function iLike(name, age, item) {
return "Mano vardas yra " + name;
}

console.log(iLike());

function price(value){
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;

    return priceForSale;
}

console.log(price(100));
console.log(price(150));

function words() {
return;
}
console.log(words("labas", "rytas", "Lietuva"));

