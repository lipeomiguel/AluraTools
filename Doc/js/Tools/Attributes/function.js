"use strict";
function soma(a, b) {
  return a + b;
}
console.log(soma(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));

const functionAnonymous =  function(v1){
  console.log("Function anonymous: " + v1);
};
functionAnonymous("Foi")

const functionArrow = (v1) => {
  console.log("Function Arrow: " + v1);
};
functionArrow("Foi")