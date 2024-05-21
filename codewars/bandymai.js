function whatday(num) {
  if (num < 1) {
    return "Wrong, please enter a number between 1 and 7";
  }
  if (num > 7) {
    return "Wrong, please enter a number between 1 and 7";
  }
  if (num === 1) {
    return "Sunday";
  }
  if (num === 2) {
    return "Monday";
  }
  if (num === 3) {
    return "Tuesday";
  }
  if (num === 4) {
    return "Wednesday";
  }
  if (num === 5) {
    return "Thursday";
  }
  if (num === 6) {
    return "Friday";
  }
  if (num === 7) {
    return "Saturday";
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

console.log(paperwork(5, -5), 0, "Failed at paperwork(5, -5)");
console.log(paperwork(-5, -5), 0, "Failed at paperwork(-5, -5)");
console.log(paperwork(-5, 5), 0, "Failed at paperwork(-5, 5)");
console.log(paperwork(5, 0), 0, "Failed at paperwork(5, 0)");

// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

console.log("----------");
function check(a, x) {
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
}

console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(["t", "e", "s", "t"], "e"), true);
console.log(check(["what", "a", "great", "kata"], "kat"), false);

//www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

https: function zeroFuel(distanceToPump, mpg, fuelLeft) {
  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  } else {
    return false;
  }
}

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

//www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

https: function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  }

  if (bmi <= 25.0) {
    return "Normal";
  }

  if (bmi <= 30.0) {
    return "Overweight";
  }

  if (bmi > 30.0) {
    return "Obese";
  }
}
console.log(bmi(80, 1.8), "Normal");

//www.codewars.com/kata/54d1c59aba326343c80000e7/train/javascript

https: function solve(x, y) {
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

//www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

https: function solution(str) {
  let array = str.split("");
  array.reverse();
  return array.join("");
}

console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log(solution("h"), "h");

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log(solution("h"), "h");

//www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

https: function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

const greetAbe = (name) => `Hello, ${name}!`;
console.log(greetAbe(), "Hello, Abe!", "greetAbe()");

//www.codewars.com/kata/59342039eb450e39970000a6/javascript

https: function oddCount(n) {
  const dalyba = n / 2;
  return parseInt(dalyba);
}

console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");

// function oddCount(n){
//  return Math.floor(n/2);
//}

console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");

// const oddCount = n => Math.floor(n/2) ;
console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");

// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript

function testEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}

console.log(makeNegative(42), -42);

function makeNegative(num) {
  return num > 0 ? -num : num;
}

function makeNegative(num) {
  return -Math.abs(num);
}

// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}

console.log(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
console.log(cookie(26), "Who ate the last cookie? It was Monica!");
console.log(cookie(2.3), "Who ate the last cookie? It was Monica!");
console.log(cookie(true), "Who ate the last cookie? It was the dog!");

console.log("------------");

// https://www.codewars.com/kata/56d49587df52101de70011e4/train/javascript

function leo(oscar) {
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar < 88) {
    return "When will you give Leo an Oscar?";
  } else {
    return "Leo got one already!";
  }
}

console.log(leo(89), "Leo got one already!");
console.log(leo(88), "Leo finally won the oscar! Leo is happy");
console.log(leo(87), "When will you give Leo an Oscar?");
console.log(leo(86), "Not even for Wolf of wallstreet?!");
