//DESTRUCTRUACION
const numeros = [1,2,3,4,5];

let uno = numeros[0],
dos = numeros[1],
tres = numeros[2],
cuatro = numeros[3],
cinco = numeros[4];

console.log(uno, dos, tres, cuatro, cinco);

//LA DESTRUCTURACION FUNCIONA PARA FACILITAR ESTE TIPO DE COSAS:


const[a,b,c,d,e] = numeros;

//declaro--asigno la destructuracion con corchetes-- pongo nombre

/*const computador = {
    componente1: 'disco duro',
    componente2: 'ram',
    cantidad: 28
} */

let{ componente1, componente2, cantidad = '2'} = computador //se coloca un valor en cantidad por defecto

console.log(cantidad);

let color = 'rojo';
let marca = 'mercedes';

const carro = {
    color,
    marca
}

console.log(carro);

