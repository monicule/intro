/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==,
NENAUDOTINI: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

const age = 99;
const ageLimit = 18;

// 1 variantas
if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...');
}

// 2 variantas
if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...');
} else {
    console.log('Ok, uzeik');
}

console.clear();

if (4 >= 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}

console.clear();

// 3 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> Nezinau tokios spalvos...
const color1 = 'white';
const color2 = 'black';
const color3 = 'red';
const color4 = 'orange';
const color5 = 'blue';
const color6 = 'violet';
const color7 = 'green';
const color8 = 'yellow';

let translation = '';

if (color1 === 'red') {
    translation = 'Raudona';
} else if (color1 === 'blue') {
    translation = 'Melyna';
} else if (color1 === 'green') {
    translation = 'Zalia';
} else {
    translation = 'Nezinau tokios spalvos...';
}

console.log('>>>', translation);

function colorTranslation(color) {
    let translation = '';

    if (color === 'red') {
        translation = 'Raudona';
    } else if (color === 'blue') {
        translation = 'Melyna';
    } else if (color === 'green') {
        translation = 'Zalia';
    } else if (color === 'white') {
        translation = 'Balta';
    } else {
        translation = '...';
    }
   
    // COLOR -> SPALVA;
    return color + ' -> ' + translation;
}

console.log(colorTranslation('white'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('violet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('yellow'));