"use strict"

//Eventos del mouse

const boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
    console.log("el botón ha sido pulsado");
})

boton.addEventListener('mouseover', function(){
    console.log("el mouse está sobre el botón");
})

boton.addEventListener('mouseout', function(){
    console.log("el mouse está fuera del botón");
})
