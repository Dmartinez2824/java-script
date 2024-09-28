//try each

try{
    //agregamos el codigo que vamos a evaluar
    console.log("codigo a evaluar");
    // codigo;
    console.log("que pasara este lugar");
}catch(error){ //si encuentra error
    console.log("error");
    
}finally{               //un default
    console.log("siempre se ejecuta"); 
    
}

try{
    // let numeros = "letras";
    let numeros = 10;
    if(isNaN(numeros)){ //isNan es util para verificar si un valor no puede
                        // ser interpretado como un numero
        throw new Error("mensaje que le mostramos al usuario");} // throw lanza una excepcion
                                                                // de si esta mal lance esa excepcion
    console.log(numeros*numeros);
    
}catch(error){
    console.error(`se produjo el siguiente error: ${error}`);
    
}