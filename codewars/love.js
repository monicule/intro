// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
    const answers = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i < answers.length; i++) {
    return answers[(nbPetals - 1) % answers.length];
}
}

console.log(howMuchILoveYou(7),"I love you")
console.log(howMuchILoveYou(3),"a lot")
console.log(howMuchILoveYou(6),"not at all")

function howMuchILoveYou(nbPetals) {
    const petals = ["I love you", "a little", "a lot", "passionately", "madly"];
    if (nbPetals % 6 === 0) {
      return "not at all";
    }
    const i = nbPetals % 6 - 1;
    return petals[i];
  }

  function howMuchILoveYou(nbPetals) {  
    while(nbPetals > 6) { nbPetals -= 6;};
    return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][nbPetals - 1];
}

function howMuchILoveYou(n) {
    const a = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return a[(n - 1) % 6];
}