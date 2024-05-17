"use strict";
const createArray = ()=>{
  const array = [];
  for (let i = 0; i < 20; i++) {
    let random = Math.random() * 100;
    array.push(parseInt(random));
  }
  return array;
}
const arrayMap = createArray();
let returnArray = arrayMap.map((item,index)=>{
  return `Number: ${item} e Index: ${index}`;
})
console.log(returnArray);
