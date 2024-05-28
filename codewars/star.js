// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(strCount("Hello", "o"), 1);
console.log(strCount("Hello", "l"), 2);
console.log(strCount("", "z"), 0);


function strCount(str, letter){  
    return str.split(letter).length-1
  }

  function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }

