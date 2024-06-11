alert("Olá, como voce esta?");
const confirms = confirm("Voce deseja cancelar?");
if(confirms){
    prompt("Voce cancelou a operação!","Sim ou Não?");
}else{
    prompt("Voce continuou a operação!","Sim ou Não?");
}