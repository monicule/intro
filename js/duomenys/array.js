/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
*/

const empty = [];
console.log(empty);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average1 = sum / count;

console.log(average1);


const marks = [10, 2, 8, 4, 6];
console.log(marks);


const sum2 = marks[0] + marks[1] + marks[3];
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Suma', sum2);
console.log('Kiekis', count2);
console.log('Vidurkis', average2);

console.log('>>>', marks [0]);

let sum3 = 0;
sum3 = sum3 + marks[0];

console.log(sum3);
