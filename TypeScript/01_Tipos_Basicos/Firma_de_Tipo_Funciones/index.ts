function calculo(x: number, y: number): number{
    return x * y;
}
//recibe en string y retorna boolean
const filtro = (valor: string): boolean =>{
    return valor.length >= 5;
}

const animales: string[] = ['perro', 'gato', 'pez', 'ave', 'hamster', 'conejo'];

const animalesFiltrados = animales.filter(filtro); 