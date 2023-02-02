"use strict"
//Operadores relacionales, valores booleanos

var datoA = 10;
var datoB = 20;

//MAYOR QUE >
var mayorQue = datoA > datoB;
console.log("Es "+ datoA + " mayor que " + datoB + ": " + mayorQue);//false

//MENOR QUE <
var menorQue = datoA < datoB;
console.log("Es "+ datoA + " menor que " + datoB + ": " + menorQue);//true

//MAYOR O IGUAL QUE >=
var mayorOIgualQue = datoA >= datoB;
console.log("Es "+ datoA + " mayor o igual que " + datoB + ": " + mayorOIgualQue);//false

//MENOR O IGUAL QUE <=
var menorOIgualQue = datoA <= datoB;
console.log("Es "+ datoA + " menor o igual que " + datoB + ": " + menorOIgualQue);//true

//IGUAL QUE ==
var igualQue = datoA == datoB;
console.log("Es "+ datoA + " igual que " + datoB + ": " + igualQue);//false

//NO ES IGUAL QUE O ES DIFERENTE QUE !=
var noEsIgualQue = datoA != datoB;
console.log("Es "+ datoA + " no es igual o diferente que " + datoB + ": " + noEsIgualQue);//true