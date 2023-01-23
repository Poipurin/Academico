"use strict"
//nombre descriptivo y corto para su reutilización
var nombre = "Bárbara";

//alcance scope
console.log(nombre)
function saludo(){
    let nombre = 'Muffin';
    console.log(nombre)

    let edad = 29;
    console.log(edad)
}

saludo();
//la asignación a una constante no es posible
const pi = 3.1416;