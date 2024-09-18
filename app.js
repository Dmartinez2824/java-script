    let nombre = "Daniel" //let una variable de bloque
    var apellido = "Martinez" // var una variable global
    const PI = 3.1416; // const una variable unica
    
    console.log(window);
    {
        let nombre = "otro nombre"; 
        var apellido = "otro apellido"
        console.log(nombre);
        console.log(apellido);
    }
    console.log(nombre); // en este caso let (nombre)
                        // se mantiene en 'Daniel'

    console.log(apellido); // en este caso var (apellido)
                        // cambia al que especificamos en bloque
                        // en 'otro apellido'
    console.log(PI);
    let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta veniam laboriosam. Sint accusamus beatae, quam cum provident culpa eaque explicabo, vero amet assumenda repellendus! Fuga, iusto quibusdam, ratione nesciunt, sequi molestiae assumenda consectetur explicabo sit magni commodi facere! Explicabo id sequi maiores repellendus voluptates quisquam numquam cum est neque?"
console.log(cadena.includes('amet')); // includes me 
                                    //retorna un boolean 

console.log(cadena.split(' ')); // split elimina los espacios y se vuelva
                                // un array de strings          

let arreglo = cadena.split(' ');
console.log(arreglo.length-1); // la combinacion matematica (n-1) para
                            // ver la cantidad de vectores que tengo

console.clear(); // para limpiar la consola


console.log(nombre + ' ' + apellido); 

lunes = "Lunes";
martes = "Martes";
miercoles = "Miercoles";

// COMILLAS INVERTIDAS
let lista = `<ul>      
<li> ${lunes}. </li>
<li> ${martes} </li> 
<li> ${miercoles} </li>
<li>jueves</li>
<li>viernes</li>
<li>sabado</li>
<li>domingo</li>
</ul>`; // la gracia de estas comillas es que admiten
        // saltos de linea que me permiten ser mas organizado
        // y buena practica para restar lineas de codigo

 console.log(lista);
 console.clear();
 
 let a = 2;
let b = new Number(25);

console.log(typeof a); // typeof me da de que tipo es
console.log(b);
console.log(typeof nombre);
console.log(typeof arreglo);


console.clear();

// FUNCTION
function suma(a, b){ //funcion para iniciar una operacion

return a + b; //return para que me devuelva algo

}

let resultado = suma(8, 25); // declaramos una variable que guarde la 
                        //operacion
console.log(resultado); // imprimir mi operacion




    