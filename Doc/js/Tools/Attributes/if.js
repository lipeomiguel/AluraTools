"use strict";
let random = Math.floor(Math.random()*10);
if(random > 5){
  console.log(`O numero ${random} é maior que 5`);
}else if(random < 5){
  console.log(`O numero ${random} é menor que 5`);
}else{
  console.log(`O numero ${random} é igual a 5`);
}