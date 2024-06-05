// ! Static é função que deixa o elemento em global!
// ! https://www.youtube.com/watch?v=lJ35mX0t1eE&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=67

class Npc{
  static alert = false;
  constructor(energia){
    this.energia = energia;
  }
  info=function(){
    console.log("---------------------------------");
    console.log("Energia:",this.energia);
    console.log("Alerta:",Npc.alert?"Sim":"Não");
  }
  static alertar=()=>{
    Npc.alert=true;
  };
}
const ncp1 = new Npc(100);
const ncp2 = new Npc(20);
Npc.alertar();
ncp1.info();
ncp2.info();