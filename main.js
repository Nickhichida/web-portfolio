let boton = document.querySelector("#boton");
let menu = document.querySelector(".menu__container");
let header = document.querySelector(".container__header");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (menu.classList.contains("open")) menu.classList.remove("open");
    else menu.classList.add("open");
});

let logo = document.querySelector(".container__logo");


logo.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
