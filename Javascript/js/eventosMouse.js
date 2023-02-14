"use strict"

//Eventos del mouse

const boton = document.querySelector('.boton');

boton.addEventListener('', function(){
    console.log("el botón ha sido pulsado");
})

boton.addEventListener('', function(){
    console.log("el mouse está sobre el botón");
})

boton.addEventListener('', function(){
    console.log("el mouse está fuera del botón");
})
