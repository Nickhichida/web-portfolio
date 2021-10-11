let boton = document.querySelector("#boton");
let menu = document.querySelector(".menu__container");
let header = document.querySelector("-container__header");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (menu.classList.contains("open")) menu.classList.remove("open");
    else menu.classList.add("open");
});


