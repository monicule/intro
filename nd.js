console.log(true && true && true && true);
console.log(true || true || true || true);
console.log(true && true && true || true);
console.log(true && true || true && true);
console.log(true || true && true && true);
console.log(true || true || true && true);
console.log(true || true && true || true);
console.log(true && true || true || true);
console.log(false && false && false && false);
console.log(false || false || false || false);
console.log(false && false && false || false);
console.log(false && false || false || false);
console.log(false || false && false && false);
console.log(false || false || false && false);
console.log(false || false && false || false);
console.log(false && false || false && false);
console.log('----------');
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && false && true && true);
console.log(false && true && true && true);
console.log(true && true && false && false);
console.log(true && false && false && true);
console.log(false && false && true && true);
console.log(false && true && true && false);
console.log(false && false && false && true);
console.log(false && false && true && false);
console.log(false && true && false && true);
console.log(true && false && false && false);
console.log(true && false && true && false);
console.log(false && true && false && false);
console.log('----------');
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || false || true || true);
console.log(false || true || true || true);
console.log(true || true || false || false);
console.log(true || false || false || true);
console.log(false || false || true || true);
console.log(false || true || true || false);
console.log(false || false || false || true);
console.log(false || false || true || false);
console.log(false || true || false || true);
console.log(true || false || false || false);
console.log(true || false || true || false);
console.log(false || true || false || false);
console.log('----------');
console.log(true || true && true || true);
console.log(false || false && false || false);
console.log(true || true && true || false);
console.log(true || true && false || true);
console.log(true || false && true || true);
console.log(false || true && true || true);
console.log(true || true && false || false);
console.log(true || false && false || true);
console.log(true || false && false || false);
console.log(false || false && true || true);
console.log(false || true && true || false);
console.log(false || true && true || true);
console.log(true || false && true || false);
console.log(false || true && false || false);
console.log('----------');
console.log(true && true && true || true);
console.log(false && false && false || false);
console.log(true && true && true || false);
console.log(true && true && false || true);
console.log(true && false && true || true);
console.log(false && true && true || true);
console.log(true && true && false || false);
console.log(true && false && false || true);
console.log(true && false && false || false);
console.log(false && false && true || true);
console.log(false && true && true || false);
console.log(false && true && true || true);
console.log(true && false && true || false);
console.log(false && true && false || false);
console.log('----------');
console.log(true && true || true || true);
console.log(false && false || false || false);
console.log(true && true || true || false);
console.log(true && true || false || true);
console.log(true && false || true || true);
console.log(false && true || true || true);
console.log(true && true || false || false);
console.log(true && false || false || true);
console.log(true && false || false || false);
console.log(false && false || true || true);
console.log(false && true || true || false);
console.log(false && true || true || true);
console.log(true && false || true || false);
console.log(false && true || false || false);
console.log('----------');
console.log(true && true || true && true);
console.log(false && false || false && false);
console.log(true && true || true && false);
console.log(true && true || false && true);
console.log(true && false || true && true);
console.log(false && true || true && true);
console.log(true && true || false && false);
console.log(true && false || false && true);
console.log(true && false || false && false);
console.log(false && false || true && true);
console.log(false && true || true && false);
console.log(false && true || true && true);
console.log(true && false || true && false);
console.log(false && true || false && false);
console.log('----------');
console.log(true || true || true && true);
console.log(false || false || false && false);
console.log(true || true || true && false);
console.log(true || true || false && true);
console.log(true || false || true && true);
console.log(false || true || true && true);
console.log(true || true || false && false);
console.log(true || false || false && true);
console.log(true || false || false && false);
console.log(false || false || true && true);
console.log(false || true || true && false);
console.log(false || true || true && true);
console.log(true || false || true && false);
console.log(false || true || false && false);
console.log('----------');
console.log(true || true && true && true);
console.log(false || false && false && false);
console.log(true || true && true && false);
console.log(true || true && false && true);
console.log(true || false && true && true);
console.log(false || true && true && true);
console.log(true || true && false && false);
console.log(true || false && false && true);
console.log(true || false && false && false);
console.log(false || false && true && true);
console.log(false || true && true && false);
console.log(false || true && true && true);
console.log(true || false && true && false);
console.log(false || true && false && false);
console.log('----------');
console.clear();


// Number.toFixed()

const c = 5;
console.log(c);
console.log(c.toFixed(20));
console.log(parseFloat(c.toFixed(20)));


function financial(x) {

  return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  // Expected output: "123.46"
  
  console.log(financial(0.004));
  // Expected output: "0.00"
  
  console.log(financial('1.23e+5'));
  // Expected output: "123000.00"

  let a = 5;
	a = 7;
	console.log(a);

  const x = 10;
const y = 9;
console.log(y - x > x - y);

for(let i = 1; i < 5; i++) {
  console.log(i);
}

console.log(1 == "1")

if (i != 5) {
  return false;
}