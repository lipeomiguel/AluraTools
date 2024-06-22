const body = document.querySelector('table');
// ! A função setAttribute é pra criar atributos em tag como exemplo: [ id | class | img | name ... ]!
const createElement = document.createElement('div');
createElement.innerHTML = "Div criada com sucesso";
createElement.style.color = "red";
createElement.setAttribute('id', 'divCriada');
body.appendChild(createElement);