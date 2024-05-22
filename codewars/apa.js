// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  let sum2 = 0;
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }

  return sum1 + sum2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  arr1 = [...arr1, ...arr2];
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }

  return sum;
}

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b);
}
