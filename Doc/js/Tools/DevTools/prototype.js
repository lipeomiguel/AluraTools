const Nave = function(energia){
  this.energia = energia;
  this.disparos = 100;
};
const n1 = new Nave(100);
Nave.prototype.vidas = 3
Nave.prototype.escudo = 10
Nave.prototype.vida = function(){
  if(this.disparos>0){
    this.disparos--;
  }
}
n1.vida();
n1.vida();
n1.vida();
n1.vida();
console.log(Nave);
console.log(n1);
console.log(n1.vidas);
console.log(n1.escudo);
console.log(n1.disparos);