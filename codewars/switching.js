// https://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month){
  const days = n;
  switch (days) {
  case 2:
    n = 28;
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    n = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    n = 30;
    break;
  default:
    n = -1;
  }
    return days;
  }

console.log(howManydays(1),31);
console.log(howManydays(2),28);
console.log(howManydays(3),31);
console.log(howManydays(4),30);
console.log(howManydays(12),31);