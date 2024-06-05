const text = 'pomidoras';
let reverseText = '';

for (let i = 0; i < text.length; i++) {
    const symbol = text[i];
    reverseText = symbol + reverseText;
}

console.log(text, '-->', reverseText);

let reverseText2 = '';

for (const symbol of text) {
    reverseText2 = symbol + reverseText2;
}

console.log(text, '-->', reverseText2);

const marks = [10, 2, 8, 4, 6];

// 0+10+2+8+4+6
const sum = marks.reduce((tarpineSuma, item) => tarpineSuma + item, 0);
console.log(sum);

// 10+2+8+4+6
const sum2 = marks.reduce((total, item) => total + item);
console.log(sum2);

// 1000+10+2+8+4+6
const sum3 = marks.reduce((total, item) => total + item, 1000);
console.log(sum3);

// 10-2-8-4-6
const diff1 = marks.reduce((total, item) => total - item);
console.log(diff1);

// 0-10-2-8-4-6
const diff2 = marks.reduce((total, item) => total - item, 0);
console.log(diff2);

const dict = ['labas', 'rytas', 'sakau', 'tau', 'Lietuva'];
const symbolsInDict = dict.reduce((t, w) => t + w.length, 0);

console.log(symbolsInDict);

const firstLetters = dict.reduce((t, w) => t + w[0], '');
console.log(firstLetters);

const firstLetters2 = dict.reduce((t, w) => t + w[0], 'Pirmos raides: ');
console.log(firstLetters2);