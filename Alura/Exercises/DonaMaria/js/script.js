function Adicionar(){
  const search_box_right = document.querySelector(".search-box-right");
  const search_box_input = document.querySelector(".input_search");
  if(search_box_input.value.length>1){
    const createElement = document.createElement("div");
    const createInput = document.createElement("input");
    const createH2 = document.createElement("h2");
    createH2.innerHTML = search_box_input.value;
    createInput.setAttribute("type", "checkbox");
    createInput.setAttribute("class","select");
    createElement.setAttribute("class","search-box-right-all");
    createElement.appendChild(createH2);
    createElement.appendChild(createInput);
    search_box_right.appendChild(createElement);
  }
}
function SelectInput(){
  console.log("SelectInput");
}