// ! A Função reduce ela retorno o value que for encontrado.
const array_new = [2,52,29,48,52,35,12,32,2]
console.log(array_new.reduce((value,index)=>{
  return value >= 1;
}))