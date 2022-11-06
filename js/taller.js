let boton = document.querySelectorAll(".mostrar");

boton.forEach((e)=>{
    e.addEventListener("click", ()=>{
        let codigo = e.nextElementSibling;
        console.log(codigo.style.display);

        if( codigo.style.display == "none" || codigo.style.display === ""){
            codigo.style.display = "block";
        }else{
            codigo.style.display = "none";
        }
    })
})


let botonFuncion = document.querySelectorAll(".mostrar__funcion");

botonFuncion.forEach((e)=>{
    e.addEventListener("click", ()=>{
        let codigo = e.nextElementSibling;
        console.log(codigo.style.display);

        if( codigo.style.display == "none" || codigo.style.display === ""){
            codigo.style.display = "block";
        }else{
            codigo.style.display = "none";
        }
    })
})