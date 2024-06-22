const table = document.querySelector('table');
// ! A função removeElement ela remove a tag!
console.log("Estaremos removendo esse elementos: ",table.children[1].children[2].textContent);
table.children[1].children[2].remove();
