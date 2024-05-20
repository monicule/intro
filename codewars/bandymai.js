function whatday(num) { 
if (num < 1) {
return 'Wrong, please enter a number between 1 and 7';
}
if (num > 7) {
return 'Wrong, please enter a number between 1 and 7';
}
if (num===1) {
 return 'Sunday';
}
if (num===2) {
 return 'Monday';
}
if (num===3) {
 return 'Tuesday';
}
if (num===4) {
 return 'Wednesday';
}
if (num===5) {
 return 'Thursday';
}
if (num===6) {
 return 'Friday';
}
if (num===7) {
 return 'Saturday'
}
}

console.log(whatday(1));
console.log(whatday(5));

// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

function paperwork(n, m) {
    if (n < 0 || m < 0) {
    return 0;
  } else {
  const sum = n * m;
  return sum;
  }
}


console.log(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');



// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

console.log('----------');
function check(a, x) {
  if (a.includes(x)) {
  return true;
} else {
    return false;
  }
}


console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

function zeroFuel(distanceToPump, mpg, fuelLeft) {

  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  } else {
    return false;
  }
}

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  let bmi = weight/height ** 2;
  if (bmi <= 18.5){
  return 'Underweight';
}

if (bmi <= 25.0){
  return 'Normal';
}

if (bmi <= 30.0){
  return 'Overweight';
}

if (bmi > 30.0){
  return 'Obese';
}
}
console.log(bmi(80, 1.80), "Normal");

https://www.codewars.com/kata/54d1c59aba326343c80000e7/train/javascript

function solve(x, y) {
  const solve = x / y;
   return solve;
}


console.log(solve(2, 1), 2);
console.log(solve(2, 4), 0.5);
console.log(solve(42, 0), Infinity);
console.log(solve(0, 8), 0);
console.log(solve(7, 2), 3.5);
console.log(solve(4.2, 1), 4.2);
console.log(solve(9999, 11), 909);
/*

https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript


function position() {
  const abc = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
  return 'Position of alphabet: '+ abc.indexOf();
  }

console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");
*/

https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
  let array = str.split('');
  array.reverse();
  return array.join('');
 }

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

function solution(str){
  return str.split('').reverse().join('');  
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i];
    }
  }
    return sum;
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);


const greetAbe = name => `Hello, ${name}!`;
console.log(greetAbe(), 'Hello, Abe!', 'greetAbe()')