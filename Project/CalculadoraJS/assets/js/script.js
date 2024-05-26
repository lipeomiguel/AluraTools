function Calcular(){
  /**
   * ! AQUI A ONDE QUE VOCE TEM QUE FAZER A FUNÇÃO DOS CACULOS!
   */
  const display = document.querySelector(".display").textContent;
  for (let index = 0; index < display.length; index++) {
    switch (display[index]){
      case "+":
        if(display.search(".")==0){
          const plus = display.split("+");
          const plusResult = parseFloat(plus[0]) + parseFloat(plus[1]);
          addElementDisplay(plusResult, true)
        }else{
          const plus = display.split("+");
          const plusResult = parseInt(plus[0]) + parseInt(plus[1]);
          addElementDisplay(plusResult, true)
        }
        break;
      case "-":
        if(display.search(".")==0){
          const menos = display.split("-");
          const menosResult = parseFloat(menos[0]) - parseFloat(menos[1]);
          addElementDisplay(menosResult, true)
        }else{
          const menos = display.split("-");
          const menosResult = parseInt(menos[0]) - parseInt(menos[1]);
          addElementDisplay(menosResult, true)
        }
        break;
      case "x":
        if(display.search(".")==0){
          const menos = display.split("x");
          const menosResult = parseFloat(menos[0]) * parseFloat(menos[1]);
          addElementDisplay(menosResult, true)
        }else{
          const menos = display.split("x");
          const menosResult = parseInt(menos[0]) * parseInt(menos[1]);
          addElementDisplay(menosResult, true)
        }
        break;
      case "÷":
        if(display.search(".")==0){
          const menos = display.split("÷");
          const menosResult = parseFloat(menos[0]) / parseFloat(menos[1]);
          addElementDisplay(menosResult, true)
        }else{
          const menos = display.split("÷");
          const menosResult = parseInt(menos[0]) / parseInt(menos[1]);
          addElementDisplay(menosResult, true)
        }
        break;
      default:
        break;
    }
  }
}
const getElement = document.querySelectorAll(".box-calc");
function addElementDisplay(element,addResult=false){
  const display = document.querySelector(".display")
  if(element=="ce" || element=="c"){
    display.innerHTML = "0";
    display.classList.add("one-time")
  }else if(display.className=="display one-time"){
    display.innerHTML = element;
    display.classList.remove("one-time")
  }else if(addResult==true){
    display.innerHTML = element;
  }else if(element=="="){
    console.log("O Resultado é: " + display.textContent);
  }else{
    display.innerHTML += element;
  }
}
getElement.forEach((item)=>{
  item.addEventListener("click",()=>{
    const index = item.id;
    addElementDisplay(index);
  });
})
