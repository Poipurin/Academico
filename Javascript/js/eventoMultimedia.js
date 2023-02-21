"use strict"
const video = document.querySelector('.bostonVideo');

video.addEventListener("play", function(){
    console.log('El video ha sido iniciado');
})

video.addEventListener("seeking", function(){//moviendo la ubicación
    console.log('Se está buscando el video', this.currentTime);
})

video.addEventListener("ended", function(){
    console.log('El video ha terminado');
})