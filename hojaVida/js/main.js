let guinda = document.querySelector(".guinda");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let body = document.querySelector(".body");
let aside = document.querySelector(".aside");

guinda.addEventListener("click", ()=>{
    body.classList.toggle("guinda");
    aside.classList.toggle("guinda");
})

green.addEventListener("click", ()=>{
    body.classList.toggle("green");
    aside.classList.toggle("green");
})

blue.addEventListener("click", ()=>{
    body.classList.toggle("blue");
    aside.classList.toggle("blue");
})









