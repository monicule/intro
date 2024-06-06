// 06 06

const B = [
  "the quick brown fox",
  "jumps over the lazy dog",
  "a bird in the hand",
  "is worth two in the bush",
  "an apple a day",
  "keeps the doctor away",
  "actions speak louder than words",
  "all good things must come to an end",
  "beauty is in the eye of the beholder",
  "better late than never",
  "birds of a feather flock together",
  "cleanliness is next to godliness",
  "dont bite the hand that feeds you",
  "dont count your chickens before they hatch",
  "dont put all your eggs in 1 basket",
  "every cloud has a silver lining",
  "every dog has its day",
  "every rose has its thorn",
  "fortune favors the bold",
  "good things come to those who wait",
  "a watched pot never boils",
  "haste makes waste",
  "history repeats itself",
  "cat got your tongue",
  "home is where the heart is",
  "if the shoe fits, wear it",
  "ignorance is bliss",
  "it takes two to tango",
  "arabs have 100 words for sand",
  "kill two birds with one stone",
  "laughter is the best medicine",
  "love is blind",
  "money doesnt grow on trees",
  "no pain no gain",
  "nothing ventured nothing gained",
  "once bitten twice shy",
  "practice makes perfect",
  "the early bird catches the worm",
  "the grass is always greener on the other side",
  "the pen is mightier than 10 swords",
  "theres no smoke without fire",
  "time heals all wounds",
  "5 second rule",
  "every dog has its day",
  "to err is human to forgive divine",
  "2 wrongs dont make a right",
  "when in Rome do as the Romans do",
  "where theres smoke, theres fire",
  "you cant judge a book by its cover",
  "you cant make an omelette without breaking eggs",
  "you reap what you sow",
  "youre never too old to learn",
];

// Surasti ilgiausią stringą;

function longestString(array) {
  let longest = '';
  for (i = 0; i < array.length; i++)
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  return console.log(longest);
}

longestString(B);

// Surasti trumpiausią stringą;

function shortestString(array) {
  let shortest = array[0];
  for (i = 0; i < array.length; i++)
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }
  return console.log(shortest);
}
shortestString(B);

// Surasti stringą, kuris prasideda “a” raide;

function startWithA(array) {
    let string = '';
    for (i = 0; i < array.length; i++) {
        if (array[i].startsWith('a')) {
            string = array[i];
            break
        }
        }
    return console.log(string);
}
startWithA(B);

// Paskaiciuoti, kiek stringu prasideda raide 'a';

function startWithA2(array) {
    let string = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].startsWith('a')) {
            string++;         
        }
        }
    return console.log(string);
}
startWithA2(B);

// isrinkti visus stringus, kurie prasideda 'a';

function startWithA3(array) {
    let stringArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].startsWith('a')) {
            stringArray.push(array[i]);         
        }
        }
    return console.log(stringArray);
}
startWithA3(B);



// Surasti stringą su daugiausia žodžių;



// Surasti stringą su mažiausiai žodžių;



// Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;
// Suskaičiuoti kiek masyve yra žodžių;
// Suskaičiuoti visas ‘s’ raides;
// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);
// Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);
