// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three) {
  let string = '';
  for (let i = 0; i < one.length; i++) {
    string += one[i];
    string += two[i];
    string += three[i];
  }
  return string;
}

console.log(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea", "urn", "pms"), "Supermans");
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");

function tripleTrouble(one, two, three) {
    let result = "";
    for (let i = 0; i < one.length; i++) {
      result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
  }

  function tripleTrouble(one, two, three){
    let x = ''
      for(i = 0; i<one.length; i++) {
        x +=  one[i] + two[i] + three[i]
      }
    return x
   }

   