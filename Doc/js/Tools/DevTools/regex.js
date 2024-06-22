const stringObj = new String("Brunoooooo");
console.log(stringObj.search(/bruno/i));
console.log(stringObj.replace(/[no,br]/ig, "TESTE"));
console.log(stringObj.replace(/[a-z|0-9]/ig, "TESTE"));
console.log(stringObj.match(/\d/ig)); // ? Numeros
console.log(stringObj.match(/\s/ig)); // ? Espaços
console.log(stringObj.match(/\bO/ig)); // ? Letras [ Digito]
console.log(stringObj.match(/o+/ig)); // ? Letras [ Digito]
console.log(window.innerWidth)
// ! A função [ i ]: para pegar os caracteres maiúsculos e minúsculos.
// ! A função [ g ]: para pegar todos os caracteres no modo global.
// ! A função [ + ]: para pegar os caracteres que tem umas outra palavras com o caractere!
// ! A função [ * ]: para pegar os caracteres especias!
// ! A função [ * ]: para pegar os caracteres especias!
// ! A função [ ? ]: para pegar os caracteres especias!
