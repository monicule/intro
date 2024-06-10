function isPythagoreanTriple(integers) {
    let a = [];
    if (a[0]*a[0] + a[1]*a[1] === a[2]*a[2]){
      return true;
    } else if (a[0]*a[0] + a[2]*a[2] === a[1]*a[1]){
      return true;
    } else if (a[1]*a[1] + a[2]*a[2] === a[0]*a[0]){
      return true;
    } else {
      return false;
    }
  }

console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);


function isPythagoreanTriple(integers) {
  let [a, b, c] = integers.sort((a, b) => a - b);
  return a * a + b * b === c * c;
}

console.log(isPythagoreanTriple2([3, 4, 5]), true);
console.log(isPythagoreanTriple2([3, 5, 9]), false);

function isPythagoreanTriple(n) {
  const [a, b, c] = n.sort((a, b) => a-b);
  return a**2 + b**2 === c**2;
}

function isPythagoreanTriple(i) {
  if (i[0]**2 + i[1]**2 === i[2]**2 ||
      i[0]**2 + i[2]**2 === i[1]**2 ||
      i[1]**2 + i[2]**2 === i[0]**2) {
    return true;
  }
  return false;
}