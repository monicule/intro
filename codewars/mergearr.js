// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
  let ats = arr1;
  for (i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  return ats.sort((a, b) => a - b);
}

console.log(
  mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]),
  [1, 2, 3, 4, 5, 6, 7, 8],
  "Basic tests"
);
console.log(
  mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Basic tests"
);
console.log(
  mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]),
  [1, 2, 3, 4, 5, 7, 9, 10, 11, 12],
  "Basic tests"
);
