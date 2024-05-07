// Kintamuju inicijavimas

const a = 567;
console.log(a);
const b = -235;
console.log(b);
const c = 88;
console.log(c);

const pasisveikinimas = 'Sveiki!';
console.log(pasisveikinimas);
const linkejimas = 'Grazios dienos!';
console.log(linkejimas);
const vsc = 'Visual Studio Code';
console.log(vsc);

const lyginiai = [0, 2, 4, 6, 8];
console.log(lyginiai);
const temperatura = [36.6, 37.0, 38.7, 37.7, 36.8];
console.log(temperatura);
const nelyginiai = [1, 3, 5, 7, 9];
console.log(nelyginiai);

const darboDienos = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis'];
console.log(darboDienos);
const vyruVardai = ['Saulius', 'Paulius', 'Domas', 'Tomas', 'Romas'];
console.log(vyruVardai);
const miestai = ['Utena', 'Vilnius', 'Kaunas', 'Klaipeda', 'Ukmerge'];
console.log(miestai);

// Veiksmai su kintamaisiais
const sum = (a + b + c);
console.log(sum);

const tekstas = pasisveikinimas + ' ' + linkejimas + ' ' + vsc;
console.log(tekstas);

const sum2 = nelyginiai[0] - nelyginiai[1] + nelyginiai[2] - nelyginiai[3] + nelyginiai [4];
console.log('Suma', sum2);
const sum3 = lyginiai[0]  - lyginiai[1] + lyginiai[2] - lyginiai [3] + lyginiai [4];
console.log('Suma', sum3);
const sum4 = temperatura[0] - temperatura[1] + temperatura[2] - temperatura[3] + temperatura[4];
console.log('Suma', sum4);

const sujungti = darboDienos[4] + ', ' + darboDienos[3] + ', ' + darboDienos[2] + ', ' + darboDienos[1] + ', ' + darboDienos[0];
console.log(sujungti);
const sujungti2 = vyruVardai[4] + ', ' + vyruVardai[3] + ', ' + vyruVardai[2] + ', ' + vyruVardai[1] + ', ' + vyruVardai[0];
console.log(sujungti2);
const sujungti3 = miestai[4] + ', ' + miestai[3] + ', ' + miestai[2] + ', ' + miestai[1] + ', ' + miestai[0];
console.log(sujungti3);

console.log('---------')

//Kintamuju palyginimas

const x = 5;
const y = 10;

if (x > y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x < y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x === y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x !== y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x >= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x <= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// Išvesti teksto tipo kintamųjų ilgius

const name = 'Monika';
const surname = 'Monikaite';

function howMany(text) {
    return console.log(text.length);
}

howMany(name);
howMany(surname);

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:

if (name > surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name < surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name === surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name !== surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name >= surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (name <= surname) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// Išvesti sąrašo tipo kintamųjų ilgius

const marks = [10, 9, 8, 4, 6, 9, 9];
const count = marks.length;
console.log('Kiekis', count);

const marks2 =[10, 8, 8, 10, 10, 6, 9];
const count2 = marks2.length;
console.log('Kiekis', count2);

if (marks > marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (marks < marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (marks === marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (marks !== marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (marks >= marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (marks <= marks2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.clear();

// Ciklo for panaudojimas

// 1

let ciklas = 0;
for (i = 0; i <= 0; i++) {
    ciklas += i;
}
console.log(ciklas);

ciklas = 0;
for (i = 0; i <= 4; i++) {
    ciklas += i;
}
console.log(ciklas);

ciklas = 0;
for (i = 0; i <= 100; i++) {
    ciklas += i;
}
console.log(ciklas);

ciklas = 0;
for (i = 574; i <= 815; i++) {
    ciklas += i;
}
console.log(ciklas);

ciklas = 0;
for (i = -50; i <= 50; i++) {
    ciklas += i;
}
console.log(ciklas);

ciklas = 0;
for (i = -70; i <= 30; i++) {
    ciklas += i;
}
console.log(ciklas);

// 2

