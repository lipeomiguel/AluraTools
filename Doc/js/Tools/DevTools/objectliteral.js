// ! Object Literal
const pessoa ={
  nome: "Felipe",
  getNome: (nomes)=>{
    return nomes+" Sol";
  }
};
console.log(pessoa.nome);
console.log(pessoa.getNome("Bruno"));


class Carro{
  // ! Quando voce esta criando uma classe pai!
  constructor(marca,placa,comeSeguro){
    this.marca = marca;
    this.placa = placa;
    this.ano = "2030";
    this.comeSeguro = comeSeguro;
    this.fimSeguro = "2040";
  }
  info(){
    console.log("Nome do carro: "+this.marca);
    console.log("Nome da placa: "+this.placa);
    console.log("Ano do carro: "+this.ano);
  }
  call(){
    console.log(this.marca+" esta ligado");
  }
}
const carroObj = new Carro("Uno","BR25-2FD","2010");
console.log(carroObj)

class Militar extends Carro{
  // ! Quando voce esta criando uma classe filho!
  constructor(marca,placa,seguros,pneu,comeSeguro){
    super(marca,placa,comeSeguro); // ? O super é o elemento que fazer o preenchimento do elemento pai!
    this.seguros = seguros;
    this.pneu = pneu;
  }
}
const militarObj = new Militar("Uno","USFGH-20",true,"Ruim","2031");
console.log(militarObj)
