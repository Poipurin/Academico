"use strict"
//Estructura SWITCH

//Evaluación con números
var edad = 30;
var resultado = "";

switch (edad) {
    case 10:
        resultado = "La edad es 10 años";
    break;
    case 20:
        resultado = "La edad es 20 años";
    break;

    case 30:
        resultado = "La edad es 30 años";
    break;
    default:
        resultado = "Ningún caso coincide";
        break;
}

console.log("El resultado de la evaluación con números es: " + resultado);

//Evaluación con cadena de texto
var producto = "TV";

switch (producto) {
    case "TV":
        resultado = "Se eligió la Tv";
    break;
    case "Radio":
        resultado = "Se eligió la Radio";
    break;
    case "Teléfono":
        resultado = "Se eligió el Teléfono";
    break;

    default:
        resultado = "No se eligió ningún producto";
    break;
}

console.log("El resultado de la evaluación con texto es: " + resultado);