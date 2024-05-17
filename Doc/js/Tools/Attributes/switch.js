'use strict'; // ! Writing and debugging mode [ Active ].
var number = Math.floor(Math.random()*11);
switch (number){
  case 1:
    console.log("O numero é 1");
    break;
  case 2:
    console.log("O numero é 2");
    break;
  case 3:
    console.log("O numero é 3");
    break;
  case 4:
    console.log("O numero é 4");
    break;
  case 5:
    console.log("O numero é 5");
    break;
  case 6: case 7: case 8: case 9:
    console.log("O numero é 6 ou 7 ou 8 ou 9");
    break;
  default:
    console.log("O numero não é 1,2,3,4 ou ",number);
    break;
}