"use strict";
const element = document.querySelectorAll("[class*='container']")
const array = new Array(...element);
array.map((item)=>{
  item.addEventListener("mouseup",()=>{
    const classItem = item.classList.add("mouseover")
  })
})