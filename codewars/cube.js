// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  } else if (volume <= 0 && side <= 0) {
    return false;
  } else if (volume === side * side * side) {
    return true;
  } else {
    return false;
  }
}

console.log(cubeChecker(8, 3), false);
console.log(cubeChecker(8, 2), true);
console.log(cubeChecker(-8, -2), false);
console.log(cubeChecker(0, 0), false);
console.log(cubeChecker(1, 5), false);
console.log(cubeChecker(125, 5), true);
