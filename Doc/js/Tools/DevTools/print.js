const tableName = document.querySelector("table");
if(prompt("Estaremos tirando um print da tela?","Sim ou Não?")=="Sim"){
    window.print();
}else{
    alert("Operação cancelada!");
}