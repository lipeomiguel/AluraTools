const body = document.querySelector('table');
console.log("Elementos Arvore: ",body.childNodes) // ! Elementos Arvore
console.log("Elementos Filhos: ",body.children) // ! Elementos Filhos
console.log("Primeiro Filhos: ",body.firstChild) // ! Elementos Primeiro Filhos
console.log("Ultimo Filhos: ",body.lastChild) // ! Elementos Ultimo Filhos
console.log("Primeiro Filhos: ",body.firstElementChild) // ! Elementos Primeiro Filhos
if(body.children[1].hasChildNodes()){
  console.log("Tem Filhos: ",true);
}else{
  console.log("Não tem filhos")
}
