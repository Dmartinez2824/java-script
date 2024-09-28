// CONDICIONALES

let edad = 38;
let horario = 10; 


// UN IF EN JAVA SCRIPT
if(edad > 17 && horario > 10) 
    console.log("es mayor de edad");
                             //cuando hay una condicion  de una linea
                             //se puede ahorrar los paretesis
else if(edad > 17 && horario <= 10)
    console.log("aun no puede salir por la hora");
else if(edad < 18 && horario > 8)
    console.log("eres menor de edad y puedes salir");
else if(edad < 18 && horario <= 8) console.log("no puedes salir ");


    //de 0 a 5 estoy dormido //6 a 11 buenos dias //  12 - 18 buenas tardes // 19-23 buenas noches
    
    
    let hora;

    if(hora<=5) console.log("estoy dormido");
    else if(hora<=11) console.log("buenos dias");
    else if(hora<=18) console.log("buenas tardes");
    else if(hora>18 && hora<23) console.log("buenas noches");
    
    let años_nacido = 17;
     if let esmayor = (años_nacido >= 18) ? 'es mayor de edad' : 'es menor de edad' ; // parte sencilla del if (si/verdadero) : (no/else)
    console.log(esmayor);
    
    
    let dia = 4;

    switch(dia){
        case 1:
            console.log("Lunes");
        break;
        case 2:
            console.log("Martes");
        break;
        case 3:
            console.log("Miercoles");
        break;
        case 4:
            console.log("Jueves");
        break;
        case 5:
            console.log("viernes");
        break;
        case 6:
            console.log("Sabado");
        break;
        case 7:
            console.log("Domingo");
        break;

            
    }
    
