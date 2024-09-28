
//ARRAY-ARREGLOS-VECTORES-MATRICES

const dias = []; // RECORDATORIO, EL ARRAY EN JS NO IMPORTA 
                // QUE TIPO DE VALOR ES, ADEMAS EL ARRAY 
                // SE VE COMO UN OBJETO.

//console.log(typeof.dias);

dias.push('Lunes'); //EL .PUSH es para subir un valor al array
dias.push('martes');
dias.push('miercoles');
dias.push('jueves');
dias.push([
    'daniel','martinez' //esto es una matriz, un array dentro de otro
]);

dias.push('viernes');
dias.push('sabado');

console.log("ANTES DE", dias); //(antes de eliminar)

/*
dias.pop(); //ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY
*/

console.log("DESPUES DE",dias); //(despues de eliminar)

console.clear();
for(let i = 0; i < dias.length; i++){ //un for en js

    console.log(i)
    console.log(dias[i]);
}
dias.splice(1,2);

//comentario largo = /***/

