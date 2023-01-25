
let unaVariable: undefined = undefined; //no es un objeto

let variableNula: null = null;//es un objeto

interface Persona{
    nombre: string,
    apellido: undefined,
}

const eleanor: Persona = {nombre: 'Eleanor'};

function decirNombre(persona: Persona): number{
    return persona.apellido.length;
}

decirNombre(eleanor);