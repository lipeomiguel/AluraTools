class Carro{
  constructor(tipo,estagioTurbo){
    this.turbo = new Turbo(estagioTurbo);
    if(tipo==1){
      this.velMax = 120;
    }else if(tipo==2){
      this.velMax = 150;
    }else{
      this.velMax = 200;
    }
    this.velMax+= this.turbo.port;
  }
  info(){
    console.log("Velocidade máxima:",this.velMax);
    console.log("Turbo:",this.turbo.port);
  }
}
class Turbo{
  constructor(e){
    if(e==1){
      this.port = 50;
    }else if(e==2){
      this.port = 75;
    }else{
      this.port = 100;
    }
  }
}
class CarroEspecial extends Carro{
  constructor(estagioTurbo){
    super(3,estagioTurbo);
    this.nome = "Carro Especial";
  }
}
const carrosObj1 = new Carro(1,0);
const carrosObj2 = new Carro(1,1);
const carrosObj3 = new CarroEspecial(3);
carrosObj1.info();
carrosObj2.info();
carrosObj3.info();