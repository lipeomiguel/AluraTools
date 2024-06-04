// ! Vamos criar uma class!
class Pessoa{ // ? Criar o nome da Class 
  constructor(nome,idade,sexo,altura,peso){  // ? Criar os constructor pra classe. 
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.altura = altura;
    this.peso = peso;
  }
}
const pessoaObj = new Pessoa("Felipe","20","Masculino","1.79","75");
console.log(pessoaObj);

class Carro{
  constructor(marca,placa="2F9-VKF",ano){
    this.marca = marca;
    if(placa[0]==0){
      this.placa = "É uma placa do pais brasil: "+placa;
    }else{
      this.placa = "É uma placa globalization: "+placa;
    }
    this.ano = ano;
  }
  info(){
    console.log("Nome do carro: "+this.marca);
    console.log("Nome da placa: "+this.placa);
    console.log("Ano do carro: "+this.ano);
  }
  call(){
    console.log(this.marca+" esta ligado");
  }
  getNome(){
    return this.marca;
  }
  setNome(nome){
    return `O nome do carro ${this.marca = nome}`;
  }
}
const carroObj = new Carro("Uno","02F-LSP","2030");
carroObj.getNome();
console.log(carroObj.setNome("Porsche"));