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
function helloWorld(){
  console.log("Hello World");
}
function xmlRequest(method='GET',url='https://api.ipify.org?format=json',asyncCallback=true,callback=false){
  this.method = method;
  this.url = url;
  this.asyncCallback = asyncCallback;
  this.callback = callback;
  this.return = (callback)=>{
      /**
        * ! Check if the callback is being called!
        * ? ajax.return(?);
      **/
      const xml = new XMLHttpRequest();
      xml.open(this.method,this.url,this.asyncCallback);
      xml.send();
      xml.onreadystatechange = ()=>{
        if(xml.readyState == 4){
          callback(xml);
      }
    }
  }
}
const ajax = new xmlRequest();
console.log(ajax.return(callReturn)); 
function callReturn(s){
  console.log(s.response);
  const json = JSON.parse(s.response);
  console.log(json.ip);
  console.log(s.status);
}