const s1 = Symbol();
const sGlobal = Symbol.for("Globals");
const s2 = Symbol.for("Carro");
console.log(Symbol.keyFor(sGlobal));
console.log(s1);