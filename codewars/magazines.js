// https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript

function magNumber(weapon, streets){
    const weaponCapacity = [
        {'PT92': 17},
        {'M4A1': 30},
        {'M16A2': 30},
        {'PSG1': 5},
      ];
  const bulletsNeeded = 3 * streets;
  const magCapacity = weaponCapacity[weapon];
  const magRequired = Math.ceil(bulletsNeeded / magCapacity);
  return magRequired;
}

// console.log(magNumber(input), expected);

console.log(magNumber['PT92', 6], 2);
console.log(magNumber['M4A1', 8], 1);
console.log(magNumber['M16A2', 19], 2);
console.log(magNumber['PSG1', 31], 19);
console.log(magNumber['PT92', 19], 4);