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
/*
function paperwork(n, m) {
     
    if (n<0 || m<0);
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
*/

// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

console.log('----------');
function check(a, x) {
  if (a.length === 0);
  return false;


}


console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);


