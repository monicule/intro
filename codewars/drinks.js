// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

function getDrinkByProfession(param){
    param = param.toLowerCase();
    if (param === 'jabroni') {
    return 	"Patron Tequila";
 } else if (param === "school counselor") {
    return "Anything with Alcohol";
 } else if (param === "programmer") {
    return "Hipster Craft Beer";
 } else if (param === "bike gang member") {
    return "Moonshine";
 } else if (param === "politician") {
    return "Your tax dollars";
 } else if (param === "rapper") {
    return "Cristal";
 } else {
    return "Beer";
 }
}

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");


function getDrinkByProfession2(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return	"Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
  }

  const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  
  const getDrinkByProfession3 = profession => drinks[profession.toLowerCase()] || "Beer"

  function getDrinkByProfession4(param){
    let map = new Map([
            ["jabroni", "Patron Tequila"],
            ["school counselor", "Anything with Alcohol"],
            ["programmer", "Hipster Craft Beer"],
            ["bike gang member", "Moonshine"],
            ["politician", "Your tax dollars"],
            ["rapper", "Cristal"]
            ]);
        
     let normal = param.toLowerCase();
     return map.has(normal) ? map.get(normal) : "Beer";
  }

  function getDrinkByProfession5(param) {
    switch (param.toLowerCase()) {
      case 'jabroni':
        return 'Patron Tequila';
      case 'school counselor':
        return 'Anything with Alcohol';
      case 'programmer':
        return 'Hipster Craft Beer';
      case 'bike gang member':
        return 'Moonshine';
      case 'politician':
        return 'Your tax dollars';
      case 'rapper':
        return 'Cristal';
      default:
        return 'Beer';
    }
  }

  function getDrinkByProfession6(param){
    const tekstasMazosiomis = param.toLowerCase();
    let answer = '';

    switch ( tekstasMazosiomis ) {
        case 'jabroni':
            answer = 'Patron Tequila';
            break;
        case 'school counselor':
            answer = 'Anything with Alcohol';
            break;
        case 'programmer':
            answer = 'Hipster Craft Beer';
            break;
        case 'bike gang member':
            answer = 'Moonshine';
            break;
        case 'politician':
            answer = 'Your tax dollars';
            break;
        case 'rapper':
            answer = 'Cristal';
            break;
            
        default:
            answer = 'Beer';
            break;
    }
    return answer;
}

function getDrinkByProfession(drink){
    if (drink.toLowerCase() === 'jabroni') {
        return 'Patron Tequila';
      } else if (drink.toLowerCase() === 'school counselor') {
        return 'Anything with Alcohol';
      } else if (drink.toLowerCase() === 'programmer') {
        return 'Hipster Craft Beer';
      } else if (drink.toLowerCase() === 'bike gang member') {
        return 'Moonshine';
      } else if (drink.toLowerCase() === 'politician') {
        return 'Your tax dollars';
      } else if (drink.toLowerCase() === 'rapper') {
        return 'Cristal';
      } else {
        return 'Beer';
      }
    }