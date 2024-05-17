"use strict";
let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 10));
}
console.log("FOR Default:",array);
for(let key in array) {
  console.log("FOR IN:",array[key]);
}
for(let key of array) {
  console.log("FOR OF:",key);
}