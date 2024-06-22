const body = document.querySelector('table');
// ! A função create Element é pra criar elementos de tag!
const createElement = document.createElement('div');
createElement.innerHTML = "Div criada com sucesso";
createElement.style.color = "red";
body.appendChild(createElement);