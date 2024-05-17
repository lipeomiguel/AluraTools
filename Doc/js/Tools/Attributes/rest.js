"use strict";
function soma(...valores) {
  let returnValor = 0;
  for (const iterator of valores) {
    returnValor = returnValor + iterator;
  }
  return returnValor;
}
console.log(soma(5,4,5,4,6,4));