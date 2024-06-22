const body = document.querySelector('body');
body.addEventListener('click', function(evt) {
    // ! É uma função pra não ficar propagation em elementos filhos!
    // ! Para quando for click so elemento pai, não nos elementos filhos!
    evt.stopPropagation()
    console.log("Clicked ");
});