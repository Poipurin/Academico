"use strict"
//Condiciones anidadas

var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if(datoA > datoB){
    resultado = "La condición se cumlió";

    if(datoC < datoB){
        resultado = "Evaluación anidada verdadera";
    }else{
        resultado = "No se cumplió la evaluación anidada";
    }
}else{
    resultado = "No se cumplió la evaluación";
}

console.log("El resultadode la evaluación anidada es: ", resultado);