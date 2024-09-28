//objetos 

const persona = {  //un objeto - const

    nombre: "Daniel",
    apellido: "Martinez",
    edad: 38
}

console.log(persona);

for(const propiedad in persona){ //(for in)
    console.log(`llave ${propiedad}, valor, valor ${persona[propiedad]} `); //EL FOR IN ME SIRVE PARA IMPRIMIR
                                                                            //LOS ITEMS QUE TIENE DENTRO DEL OBJ PERSONA
}

let iterador = 0;
let palabra = "validando que esto es una palabra";

for(const elemento of palabra){  //for of
    console.log(` ${iterador} ${elemento}`); //EL FOR OF ME DELETREA EL VALOR 
    iterador++;
}

