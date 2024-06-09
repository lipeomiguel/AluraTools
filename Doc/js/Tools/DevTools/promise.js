const info_nome = document.querySelector(".info-nome");
const AlterarText = new Promise((request,reject)=>{
  const randomNumber = parseInt(Math.random() * 10);
  const time = `${randomNumber}`;
  const value = time/2;
  console.log("Esse é tempo de espera: " + time);
  setTimeout(()=>{
    if(value>5){
      request("O Numero é par");
    }else{
      reject("O Numero é impar");
    }
  },5000);
});
AlterarText.then((retorno)=>{
  info_nome.innerHTML = retorno;
})
AlterarText.catch((retorno)=>{
  info_nome.innerHTML = retorno;

})
