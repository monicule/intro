// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  const count = classPoints.length;
  const average = sum / count;
  if (average < yourPoints) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);


function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

  function betterThanAverage(c, y) {
    return (c.reduce((t, p)=>t+p, 0) + y) / (c.length + 1) < y
    }