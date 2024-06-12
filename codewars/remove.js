// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), [
  "Hello",
  "Hello Again",
]);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]), [["Goodbye"]]);


function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

  function removeEveryOther(a){
    return a.filter((x, i) => i % 2 === 0)
    }



// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str){
    return str.slice(1, -1)
    }



console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');

const removeChar2 = str => str.slice(1,-1)