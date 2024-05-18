let element = document.getElementsByTagName("h2")
let array = new Array(...element);
array.map((item)=>{
  console.log(item.innerText);
})