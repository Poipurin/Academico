"use strict"
//Parámetros REST

function cocinar (ingrediente1, ingrediente2, ...masIngredientes){
    console.log('Ingrediente 1: ', ingrediente1);
    console.log('Ingrediente 2: ', ingrediente2);
    console.log("Más Ingredientes: ", masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Kimchi", "Calamar");