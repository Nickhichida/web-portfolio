let boton = document.querySelector("#boton");
let menu = document.querySelector(".menu__container");
let header = document.querySelector("-container__header");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (menu.classList.contains("open")) menu.classList.remove("open");
    else menu.classList.add("open");
});

let logo = document.querySelector(".container__logo");
let buttonHome = document.querySelector(".button__home");
let buttonSkills = document.querySelector(".button__skills");
let buttonPorfolio = document.querySelector(".button__portfolio");
let buttonContact = document.querySelector(".button__contact");


logo.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
buttonHome.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top: 30,
        left: 0,
        behavior: 'smooth'
    });
})

buttonSkills.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top: 685,
        left: 0,
        behavior: 'smooth'
    });
})
buttonPorfolio.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top: 1252,
        left: 0,
        behavior: 'smooth'
    });

})
buttonContact.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top: 1325,
        left: 0,
        behavior: 'smooth'
    });
})
