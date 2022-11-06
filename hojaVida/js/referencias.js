let card = document.querySelectorAll(".article__card--h2");

card.forEach((ele) => {
    ele.addEventListener("click", function(){
        let panel = ele.nextElementSibling;
        
        if (panel.style.display =="none" || panel.style.display === ""){
            panel.style.display = "block";
        }else{
            panel.style.display = "none";
        }
    });
})

