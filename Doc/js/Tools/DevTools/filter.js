// ! A função Filter pra checker o Array
const idade = [1,26,25,9,52,19];
const fits = idade.filter((e)=>{
  if(e > 18){
    console.log("Esse aqui são as pessoal que tem mais de 18:",e)
  }
})