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


function isPythagoreanTriple2(integers) {
    let a = [];
    if (a[0]*a[0] + a[1]*a[1] === a[2]*a[2] || 
        a[0]*a[0] + a[2]*a[2] === a[1]*a[1] || 
        a[1]*a[1] + a[2]*a[2] === a[0]*a[0]) {
      return true;
    } else {
      return false;
    }
  }

console.log(isPythagoreanTriple2([3, 4, 5]), true);
console.log(isPythagoreanTriple2([3, 5, 9]), false);