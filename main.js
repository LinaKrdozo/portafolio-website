//variable para menu de navegacion
const header = document.querySelector("header");
//primera card
let cerrar = document.querySelectorAll(".close")[0];
let cerrar2 = document.querySelectorAll(".close2")[0];
let cerrar3 = document.querySelectorAll(".close3")[0];
let cerrar4 = document.querySelectorAll(".close4")[0];
let abrir = document.querySelectorAll(".button1")[0];
let abrir2 = document.querySelectorAll(".button2")[0];
let abrir3 = document.querySelectorAll(".button3")[0];
let abrir4 = document.querySelectorAll(".button4")[0];
let modal = document.querySelectorAll(".modal")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modal3 = document.querySelectorAll(".modal3")[0];
let modal4 = document.querySelectorAll(".modal4")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let modalC2 = document.querySelectorAll(".modal-container2")[0];
let modalC3 = document.querySelectorAll(".modal-container3")[0];
let modalC4 = document.querySelectorAll(".modal-container4")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

abrir2.addEventListener("click", function(e){
    e.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-close2");
});

abrir3.addEventListener("click", function(e){
    e.preventDefault();
    modalC3.style.opacity = "1";
    modalC3.style.visibility = "visible";
    modal3.classList.toggle("modal-close3");
});

abrir4.addEventListener("click", function(e){
    e.preventDefault();
    modalC4.style.opacity = "1";
    modalC4.style.visibility = "visible";
    modal4.classList.toggle("modal-close4");
});

cerrar.addEventListener("click", function(e){
    modal.classList.toggle("modal-close");
   
    
    setTimeout(function(){
     modalC.style.opacity = "0";
     modalC.style.visibility = "hidden";
    }, 900)

});

cerrar2.addEventListener("click", function(e){
    
    modal2.classList.toggle("modal-close2");
    
    
   
    setTimeout(function(){
     modalC2.style.opacity = "0";
     modalC2.style.visibility = "hidden";
    }, 900)

    
});

cerrar3.addEventListener("click", function(e){
    
    modal3.classList.toggle("modal-close3");
   
    
   

    setTimeout(function(){
     modalC3.style.opacity = "0";
     modalC3.style.visibility = "hidden";
    }, 900)

   
});

cerrar4.addEventListener("click", function(e){
   
    modal4.classList.toggle("modal-close4");
    
    

    setTimeout(function(){
     modalC4.style.opacity = "0";
     modalC4.style.visibility = "hidden";
    }, 900)
});



window.addEventListener("click", function(e){
    if(e.target == modalC){
        modal.classList.toggle("modal-close"); 

        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 900)
    }
    if(e.target == modalC){
        modal2.classList.toggle("modal-close2"); 

        setTimeout(function(){
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";
        }, 900)
    }
    if(e.target == modalC){
        modal3.classList.toggle("modal-close3"); 

        setTimeout(function(){
            modalC3.style.opacity = "0";
            modalC3.style.visibility = "hidden";
        }, 900)
    }
    if(e.target == modalC){
        modal4.classList.toggle("modal-close4"); 

        setTimeout(function(){
            modalC4.style.opacity = "0";
            modalC4.style.visibility = "hidden";
        }, 900)
    }
})

//sticky menu de navegación

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});