 //FUNCIONES
// funciona como loistic 


/** 
 * 
 * @param {*}a;
 * @param {*}b;
 * @returns 
 * 
 * **/
let a = 20;
let b = 30;



const matriz = function(a , b){
    let resultado = [];
    let suma = a + b;
    let resta = a - b;
    let divicion = a / b;
    let multiplicacion = a * b; 

    resultado.push(['1: ',suma]); //asi se hace una matriz, un array dentro de otro
    resultado.push(['2: ',resta]);
    resultado.push(['3',multiplicacion]);
    resultado.push(['4: ',divicion]);
    
    //como se visualiza en la consola
    // (4) [Array(2), Array(2), Array(2), Array(2)]
    /* interiorizando 
    0: (2) ['1: ', 50]
    1: (2) ['2: ', -10]
    2: (2) ['3', 600]
    3: (2) ['4: ', 0.6666666666666666]
    */
    
    return resultado;
}
let resultado = matriz (a , b);
console.log(resultado);
