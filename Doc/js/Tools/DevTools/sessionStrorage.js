window.sessionStorage.setItem("email","andre@tuta.io");
window.sessionStorage.setItem("password","123123231");
console.log(window.sessionStorage.getItem("Numero"))
console.log(window.sessionStorage);
for (let index = 0; index < window.sessionStorage.length; index++) {
    console.log(window.sessionStorage.getItem(window.sessionStorage.key(index)))
    
}

// ! O localStorage ele armazenamento somente quando a pagina estiver aberta!
