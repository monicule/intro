// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

  console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
  console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
  console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
  console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
  console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");


  function areYouPlayingBanjo(name) {
    let letter = name.charAt(0);
    if(letter === "r" || letter === "R"){
      return `${name} plays banjo`;
    } else {
      return `${name} does not play banjo`;
    }
  }

  function areYouPlayingBanjo(name) {
    return name[0].toUpperCase() === 'R' ? name + " plays banjo" : name + " does not play banjo";
  }