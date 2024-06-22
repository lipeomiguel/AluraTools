// ! Create Json Object for Map
const maps = new Map();
maps.set("user","1");
maps.set("password","2");
maps.set("name","3");
console.log(maps);
console.log("A Chave Password exites:",maps.has("password"));
console.log("A Chave Password Pegando:",maps.get("password"));
console.log("A Chave Password Deletando:",maps.delete("name"));