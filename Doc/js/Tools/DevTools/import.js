// ! Estamos exportando os arquivos import.js;
// ? Pro arquivo module.js;

class Echo{
    constructor(name, age, message) {
        this.name = name;
        this.age = age;
        this.message = message;
    }
    getEcho(){
        return [this.name,this.age,this.message];
    }
}
function numberRandom(){
    return Math.floor(Math.random() * 100);
}
export {
    Echo,
    numberRandom
}