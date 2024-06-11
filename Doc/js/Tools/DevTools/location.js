const button_paciente = document.querySelector(".bto-principal");
console.log(window.history.back());// ! Aqui estaremos fazendo o redicionamento pra pagina anterior.
button_paciente.addEventListener("click", function(event) {
    window.location.replace("https://www.google.com.br");
    console.log("Estaremos fazendo o redicionamento pro: https://www.google.com.br");
});