// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
let sum = 0;
for (let i = 0; i < sheep.length; i++) {
if (typeof sheep[i] === true) {
    sum++;
}
}
return sum;
}

console.log([], 0);
console.log([undefined], 0);
console.log([[null], 0]);
console.log([[false], 0]);
console.log([[true], 1]);
console.log([[undefined,null,false,true], 1]);
console.log([[undefined,null,false,true,true,false,null,undefined], 2]);
console.log([[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17]);

function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
  }


console.log('------------------------------');


// KITAS su avimis https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

let countSheep = function (num){
    let sum = '';
    for(let i = 1; i <= num; i++){
      sum += `${i} sheep...`;
    }
    return sum;
  }

console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");

let countSheep2 = function (num){
    let result = '';
  for (let i = 1; i <= num; i++) {
      result += i+' sheep...';
  }
  return result;
}

console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");

