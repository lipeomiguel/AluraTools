window.onload = function (){
  let btn = document.querySelector('.bto-principal').addEventListener('click',()=>{
    console.log('clicou')

  })
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
ajax.return(dados); //? Create callback for data processing: [ ajax.return(a); ] 
function dados(xml){
  console.log(xml.responseText);
}