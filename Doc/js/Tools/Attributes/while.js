"use strict";
let while_whats = true;
while (while_whats) {
  let numero = Math.floor(Math.random() * 10);
  console.log("While:",numero);
  if(numero==4){
    while_whats = false;
  }
}
do{
  let numero = Math.floor(Math.random() * 10);
  console.log("Do While:",numero);
  if(numero==4){
    while_whats = false;
  }
}while(while_whats);