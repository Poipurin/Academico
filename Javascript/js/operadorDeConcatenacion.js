"use strict"
//Operadores de concatenación

var datoA = 10;
var datoB = 20;

var nombre = "Bárbara";
var apellido = "Pino";

//CONCATENACIÓN DE NÚMEROS
var concatNumeros = datoA + datoB;
console.log("Los números "+ datoA +" y " + datoB + "usados como números concatenados hacen una suma igual a: ", concatNumeros); //30

//CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre + " " + apellido;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto); //Bárbara Pino

//CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumComoTxt = "2"+"8";
console.log("Los números 2 y 8 usados como texto se unen para formar: ", concatNumComoTxt); //28

//CONCATENACIÓN DE TEXTO Y NÚMEROS
var concatTxtNum = datoA + "8";
console.log("El número "+ datoA +"usado como número y 8 como texto se unen para formar: ", concatTxtNum); //108