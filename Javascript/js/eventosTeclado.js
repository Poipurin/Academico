"use strict"
 //Eventos del teclado

window.addEventListener("keydown", function (event){
    console.log('Pulsando tecla');
    console.log(String.fromCharCode(event.key))
})

window.addEventListener("keypress", function (event){
    console.log('Tecla pulsada')
})

window.addEventListener("keyup", function (event){
    console.log('Tecla liberada')
})