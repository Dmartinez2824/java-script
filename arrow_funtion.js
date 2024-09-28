//FUNCIONES EXPRESADAS

const saludo = function () { //funcion llamada saludo

     console.log("hola mundo de js");
    //  return "hola mundo"; 
     
}

console.log(saludo); // de esta manera se imprime console.log("hola mundo de js") esta mal

saludo(); //manera correcta de imprimir una funcion (como un metodo)


//declarar arrow funtion simple

const bienvenida = (nombre, apellidos) => { //flecha la toma funcion 
    console.log(`hola mundo de js mi nombre es ${nombre} ${apellidos}`); //manera facil para realizar una funcion 
                                                                        //se puede realizar en una linea si solo hay un parametro como
                                                                        //const bienvenida = (nombre) => console.log(`hola mundo de js mi nombre es ${nombre}`);
}

bienvenida('Daniel','Martinez');