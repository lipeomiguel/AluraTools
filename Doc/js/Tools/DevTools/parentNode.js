const body = document.querySelector('table');
console.log("Elementos Pai: ",body.parentNode) 
console.log("Elementos Pai: ",body.parentElement) 
console.log("Elementos Pai indo pro irmão: ",body.parentNode.children[1].textContent) 