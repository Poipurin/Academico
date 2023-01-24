const arregloString1: string[] = ['a', 'b', 'c'];

const arregloString2: Array<string> = ['a', 'b', 'c'];

interface Persona{
    nombre: string
}
//arreglo que solo permite objetos de tipo persona
const arregloPersonas: Array<Persona> = [{nombre: 'Pablo'}, {nombre: 'Pedro'}];