/* 
 > Sinal de maior 
 => Sinal de maior ou igual
 < Sinal de menor
 <= Sinal de menor ou igual
 = Sinal de igual
 = Sinal de igual
 ? Sinal de Logico se for verdadeiro : se falso
 ! Sinal de Inverte o true para false e false para true
*/
let numberOne = Math.floor(Math.random() * 10);
let numberTwo = Math.floor(Math.random() * 10);
if(numberOne>numberTwo){
  console.log(`${numberOne} é maior que ${numberTwo}`);
}else if(numberOne<numberTwo){
  console.log(`${numberOne} é menor que ${numberTwo}`);
}else if(numberOne=numberTwo){
  console.log(`${numberOne} é igual a ${numberTwo}`);
}
console.log((numberOne%2) ? "Par" : "Ímpar");