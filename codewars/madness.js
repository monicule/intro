// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  for (i = 0; i < a.length; i++) {
    sum1 += a[i] ** 2;
  }
  for (i = 0; i < b.length; i++) {
    sum2 += b[i] ** 3;
  }
  if (sum1 > sum2) {
    return true;
  } else {
    return false;
  }
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]), true);
console.log(arrayMadness([5, 6, 7], [4, 5, 6]), false);
console.log(arrayMadness([4, 5, 6], [3, 4, 5]), false);
console.log(arrayMadness([3, 4, 5], [2, 3, 4]), false);
console.log(arrayMadness([2, 3, 4], [1, 2, 3]), false);
console.log(arrayMadness([1, 2, 3], [0, 1, 2]), true);
console.log(arrayMadness([5, 3, 2, 4, 1], [15]), false);
console.log(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]), false);
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);
console.log(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]), false);


const arrayMadness2 = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

function arrayMadness3(a, b) {
    return a.reduce( (sum, el) => sum + el ** 2, 0) >
           b.reduce( (sum, el) => sum + el ** 3, 0);
  }

  function arrayMadness4(a, b) {
    return a.reduce((x,y) => x + y ** 2, 0) > b.reduce((x,y) => x + y ** 3, 0) ? true : false
  }

  function arrayMadness5(a, b) {
    return a.reduce( (t, i) => t + i*i, 0 ) > b.reduce( (t, i) => t + i*i*i, 0 );
}