"use strict"
//JSON => JavaScript Object Notation, es descriptivo.
var persona = {nombre: 'Sergio', twitter:'yacafx'};

//arreglo
var personas =[
    {nombre: 'Hugo', twitter:'dcHugo'},
    {nombre: 'Paco', twitter:'dcPaco'},
    {nombre: 'Luis', twitter:'dcLuis'},
]

var personaJSON = JSON.stringify(persona); //Convertir en cadena de texto que no se interpreta como objeto

var nuevaPersona = JSON.parse(personaJSON);