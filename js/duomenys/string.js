/*
STRING  - tekstas, tekstiniu simboliu grandinele

inicijavimas: ' (vienguba), " (dviguba)

*/

const name = 'Jonas';
console.log(name);

const name2 = "Maryte";
console.log(name2);

const sakinys = "Labas rytas, Lietuva!";
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

// Dviguba (") kabute.
const kabutes2 = 'Dviguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabutes12);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabutes12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabutes12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
const kabutes12_4 = "Vienguba (\') ir dviguba (\") kabutes.";

//escaping
console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

console.clear();

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/

let pinigai = 0;
const turinys = "Pinigines turinys:";
console.log(turinys + " " + pinigai + ";" );

pinigai = pinigai + 10;
const papildymas = "Pinigine papildyta:";
console.log(papildymas + " " + pinigai + ";" );
console.log(turinys + " " + pinigai + ";" );

let pinigai2 = 90
console.log(papildymas + " " + pinigai2 + ";" );
pinigai = pinigai + pinigai2;
console.log(turinys + " " + pinigai + ";" );