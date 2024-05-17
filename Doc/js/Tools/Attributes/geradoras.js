"use strict";
function* pergunta(){
  const name = yield "Qual é seu nome?";
  const cor = yield "Qual é a sua cor favorita?";
  const carro = yield "Qual é seu carro favorito?";
  const animal = yield "Qual é o seu animal favorito?";
  return `${name}, sua cor favorita é ${cor}, seu carro favorito é ${carro} e seu animal favorito é ${animal}.`;
}
const perguntas = pergunta();
console.log(perguntas.next("Felipe").value);
console.log(perguntas.next("Azul").value);
console.log(perguntas.next("Land Rover").value);
console.log(perguntas.next("Dog").value);
console.log(perguntas.next().value)