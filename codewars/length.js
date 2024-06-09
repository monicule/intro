// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
    return str.split(" ").map((s) => s + " " + s.length);
   }

console.log(addLength('apple ban'),["apple 5", "ban 3"]);
console.log(addLength('you will win'),["you 3", "will 4", "win 3"]);

   function addLength(str) {
    let newString = str.split(' ');
    let result = [];
    for (let i = 0; i < newString.length; i++) {
        result.push(newString[i] + ' ' + newString[i].length)
    }
    return result;
}

function addLength(str) {
    const array = str.split(' ');
    let newText = '';
   
    for (let i = 0; i < array.length; i++) {
        newText += (array[i] + ' ' + array[i].length + '  ');
    }
    let newArray = newText.trimEnd().split('  ');
    
    return newArray;
}

