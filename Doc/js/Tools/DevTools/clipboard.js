const titulo = document.querySelector(".titulo");
titulo.addEventListener("click", ()=>{
  console.log(titulo.innerHTML)
  navigator.clipboard.writeText(titulo.innerHTML);
});