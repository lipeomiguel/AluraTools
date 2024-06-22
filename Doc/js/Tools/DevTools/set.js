// ! Create Json Object for SET
const set = new Set(["id","user","password","server"]);
set.add("Musica");
set.add("Futebol");
set.add("PC");
set.add("COMPUTER");
console.log(set);
set.delete("COMPUTER");
console.log(set);
set.clear();
console.log(set);
