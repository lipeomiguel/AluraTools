/**
 * O operador Spread é usado para transformar um array em uma lista de argumentos.
 */
let jogador1 = {nome:"Life",energia:100,vida:3,magia:150};
let jogador2 = {nome:"Pose",energia:100,vida:3,velocidade:100};
let status = {...jogador1,...jogador2};
console.log(status);
const soma = (a,b,c) => {
  console.log(a+b+c);
};
let valores = [9,10,2];
soma(...valores);
const getElements = ()=>{
  return document.querySelectorAll("td");
}
let random = Math.floor(Math.random()*getElements().length);
console.log(...getElements()[random].style.backgroundColor = "red");
