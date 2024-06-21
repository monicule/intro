// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
    let answer = 0;
    if (year % 100 === 0) {
        answer = Math.floor(year / 100);
    } else {
        answer = Math.floor(year / 100 +1);
    }    
    return answer;
  }

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');

//const century = year => Math.ceil(year/100);

//const century = year => (year / 100) % 1 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;

function century(year) {
    const y = year / 100;
    return Math.ceil(y);
    
  }