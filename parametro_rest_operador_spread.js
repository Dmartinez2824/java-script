function sumar(a,b, ...c) { // parametro rest (...c)

    console.log(c);
    let suma = a + b;
    c.forEach(function (n){
        suma += n;
    });
    
    return suma;
}
console.log(sumar('hola',5,12,23,99));


//concatenar 2 array
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

console.log(array1.concat(array2)); // manera 1 de concatenar (antigua);
console.log(...array1,...array2); // manera 2 de concatenar (con rest);
console.log([...array1,array2]);












