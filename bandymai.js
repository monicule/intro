const number = 2;
const number1 = 3;
const sum = 2+3;
const sub = 2-3;
const dauginti = 2*3;
const dalinti = 2/3;

const x = 1;
const y = 2;
const z = x + y;

let m = 8;
console.log(m);
m = 9;
console.log(m);
m = 15;
console.log(m);

console.log(sum);
console.log(sub);
console.log(dauginti);
console.log(dalinti);

console.log('----------');

// Stand up su Mantu

function vardas(name) {
return console.log(`Labas, ${name}!`);
}

vardas('Mantai');
vardas('Monika');
vardas('Saule');

function howMany(text) {
    return console.log(text.length);
}

howMany('Labas');
howMany('Gyvenimas');

console.log('----------');

// Uzdavinys su Mark ir John

let Mmass = 78;
let Jmass = 92;
let Mheight = 1.69;
let Jheight = 1.95;

// pirmo var BMI formule
let MBMI = Mmass / (Mheight * Mheight);
let JBMI = Jmass / (Jheight * Jheight);
console.log(MBMI);
console.log(JBMI);

//antro var BMI formule
let MBMI2 = Mmass / Mheight ** 2;
let JBMI2 = Jmass / Jheight ** 2;
console.log(MBMI2);
console.log(JBMI2);

console.log('----------');

let markHigherBMI = MBMI > JBMI;
console.log(markHigherBMI);

console.log('----------');

Mm = 95;
Jm = 85;
Mh = 1.88;
Jh = 1.76;
let MBMI3 = Mm / (Mh * Mh);
let JBMI3 = Jm / (Jh * Jh);
console.log(MBMI3);
console.log(JBMI3);

let markHigherBMI3 = MBMI3 > JBMI3;
console.log(markHigherBMI3);