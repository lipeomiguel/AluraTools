"use strict"; // ! Modo escrita e depuração [ Active ].
let name;

function nameRandom() {
  name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  console.log(`Esse nome é do nameRandom: ${name}`);
}
nameRandom();
console.log(`Esse nome é do main: ${name}`);