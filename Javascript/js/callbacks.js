"use strict"
//Callbacks

function calcular(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(resta);
}

calcular(2, 3, function(resultado){
    console.log('Suma', resultado)
}, function(resultado){
    console.log('Resta', resultado)
})