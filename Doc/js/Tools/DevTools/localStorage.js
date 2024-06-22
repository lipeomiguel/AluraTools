window.localStorage.setItem("email","andre@tuta.io");
window.localStorage.setItem("password","123123231");
console.log(window.localStorage.getItem("Numero"))
console.log(window.localStorage);
for (let index = 0; index < window.localStorage.length; index++) {
    console.log(window.localStorage.getItem(window.localStorage.key(index)))
    
}
// ! O localStorage ele armazenamento pra sempre!