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
const sum = a + b + c;
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

console.log(name.length);
console.log(surname.length);

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

console.log('-------');

// 2

const text = 'abcdef';

/*
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
*/

const jungti = text[5] + text[4] + text[3] + text[2] + text[1] + text[0];
console.log(jungti);


const text5 = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < text5.length; i++) {
    console.log(text5[text5.length - 1 - i]);
}


console.log('-------');

// 3

let dal3 = 0;
let dal5 = 0;
let dal7 = 0;

for (i = 0; i < 11; i++) {
    if (i % 3 === 0) {
        dal3++
    }
    if (i % 5 === 0){
        dal5++
    }
    if (i % 7 === 0) {
        dal7++
    }
}

console.log(dal3);
console.log(dal5);
console.log(dal7);
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.');


console.log('-------');

dal3 = 0;
dal5 = 0;
dal7 = 0;

for (i = 8; i < 31; i++) {
    if (i % 3 === 0) {
        dal3++
    }
    if (i % 5 === 0){
        dal5++
    }
    if (i % 7 === 0) {
        dal7++
    }
}

console.log(dal3);
console.log(dal5);
console.log(dal7);


dal3 = 0;
dal5 = 0;
dal7 = 0;

for (i = -18; i < 18; i++) {
    if (i % 3 === 0) {
        dal3++
    }
    if (i % 5 === 0){
        dal5++
    }
    if (i % 7 === 0) {
        dal7++
    }
}

console.log(dal3);
console.log(dal5);
console.log(dal7);

console.clear();


// Funkcijos

// 1

console.log('-------------------------');

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2

function daugyba(skaicius1, skaicius2) {
const skaicius3 = skaicius1 * skaicius2;
    return skaicius3;
}
console.log(daugyba(3, 5));
console.log(daugyba(10, 5));
console.log(daugyba(3, 10));

console.log('-------------------------');

// 3

function skaitmenuKiekisSkaiciuje(n) {
    if (typeof n !== 'number') {
       return 'Pateikta netinkamo tipo reikšmė.';

 } else {
    const nAsText = '' + n;
        return nAsText.length;
    }   
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(-37060123456));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje('labas'));