"use strict";
function alunoAction(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.dados_anonymous = function(){
    setTimeout(()=>{
      console.log("Nome: "+this.nome+", Idade: "+this.idade);
    },3000)
  }
}
const aluno1 = new alunoAction("Felipe", 22);
aluno1.dados_anonymous();