// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i] * numbers[i];
    }
    return sum;
  }

  console.log(squareSum([1,2]), 5);
  console.log(squareSum([0, 3, 4, 5]), 50);
  console.log(squareSum([]), 0);

  function squareSum(numbers){
    let sum = 0;
    for (const num of numbers) {
      sum += num ** 2;
    }
    return sum;
  }

  console.log(squareSum([1,2]), 5);
  console.log(squareSum([0, 3, 4, 5]), 50);
  console.log(squareSum([]), 0);
