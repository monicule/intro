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

console.clear();

/*
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/

const name = 'Jennifer';
const surname = 'Aniston';

if (name.length < surname.length) {
    console.log(surname); 
} else {
    console.log(name);
    }

console.log('----------');


const myname = 'Monika';
const mysurname = 'Kasauskaitė';
const born = 1988;
const year = 2024;

const myage = year - born;

//const intro = 'Aš esu' + ' ' + myname + ' ' + mysurname + '.' + ' ' + 'Man yra' + ' ' + manMetu + ' ' + 'metai' + '.';
//console.log(intro);

function intro(myname, mysurname, myage) {
    return 'Aš esu ' + myname + ' ' + mysurname + '. Man yra ' + myage + ' metai.';
}

console.log(intro(myname, mysurname, myage));