const tableName = [...document.querySelectorAll(".info-nome")];
function getMoveMouse(elements) {
    window.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const roteio = Math.atan2(y, x);
        elements.style.transform = `rotate(${roteio*180 /  Math.PI}deg)`;
    })
}
tableName.map((e)=>{
    e.addEventListener("click",(event)=>{
        getMoveMouse(e);
    })
})