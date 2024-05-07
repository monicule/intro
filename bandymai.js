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
let u = 30;
console.log(u);
u = u+1;
console.log(u);

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
console.clear();

// Uzdavinys su Mark ir John

const mMass = 78;
const jMass = 92;
const mHeight = 1.69;
const jHeight = 1.95;

// pirmo var BMI formule
const mBMI = mMass / (mHeight * mHeight);
const jBMI = jMass / (jHeight * jHeight);
console.log(mBMI);
console.log(jBMI);

//antro var BMI formule
const mBMI2 = mMass / mHeight ** 2;
const jBMI2 = jMass / jHeight ** 2;
console.log(mBMI2);
console.log(jBMI2);

console.log('----------');

const markHigherBMI = mBMI > jBMI;
console.log(markHigherBMI);

if (mBMI > jBMI) {
    console.log('Marko BMI is higher than Johno!');
} else {
    console.log('Johno BMI is higher than Marko!');
}

console.log('----------');

const Mm = 95;
const Jm = 85;
const Mh = 1.88;
const Jh = 1.76;
const MBMI3 = Mm / (Mh * Mh);
const JBMI3 = Jm / (Jh * Jh);
console.log(MBMI3);
console.log(JBMI3);

const markHigherBMI3 = MBMI3 > JBMI3;
console.log(markHigherBMI3);

if (MBMI3 > JBMI3) {
    answer2 = "Mark's BMI is higher than John's!";
} else {
    answer2 = "John's BMI is higher than Mark's!";
}
console.log(answer2);