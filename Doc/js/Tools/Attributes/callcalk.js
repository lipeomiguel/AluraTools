"use strict";
const soma = (x,y) => console.log(x+y);
const math = (x,y,functions)=>{
  return functions(x,y);
}
math(5,5,soma);