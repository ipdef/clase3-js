/* Genera un array con al menos 10 datos de diferentes tipos.
tu script debe dar los siguientes outputs:

La suma de todos los valores numéricos
Un nuevo array con todos los datos no númericos 
*/

let array = [
    7,
    true,
    'perro',
    27,
    'casa',
    'perro',
    false,
    'cinco',
    5.5,
    12
];

let sum = 0;
let noNumericValues = [];

for (let i = 0; i < array.length; i++) {
    //Si es númerico sumar, caso contrario guardar en nuevo array 
    if (typeof array[i] === "number"){   //el tipo de array que esta en la posición[0] que tiene el for
        //definir código
        sum += array[i]; //acumulador
    }else{
        //definir código
        noNumericValues.push(array[i]);
    }
}

console.log('La suma de los valores numéricos es: ', sum);
console.log('Array con los valores no numéricos', noNumericValues);


//ejercicio 1

let array = [];

let valorIngresado;

while(valorIngresado != "stop"){
    valorIngresado = prompt("Ingrese numeros y finalice con stop")
        if(valorIngresado == "stop"){
            break;
        }
    array.push(valorIngresado);
        // if(valorIngresado == "stop"){
        //     array.pop();
        // }

}

//array.pop();

alert(array);




//ejercicio 1
let numeros = [];

let numeroIngresado = prompt("Ingrese valores numericos, si desea parar escribir 'stop'");

while(numeroIngresado !== 'stop'){
    numeros.push(numeroIngresado);
    numeroIngresado = prompt("Ingrese valores numericos, si desea parar escribir 'stop' ");
}
console.log(numeros);



//Ejercicio 2

let pares = [];
let impares = [];
let datoNoNumerico = [];

let numeroIngresado = prompt("Ingrese valores numericos, si desea parar ingrese 0");

while(numeroIngresado != "0"){
    if(numeroIngresado % 2 == 0){
        pares.push(numeroIngresado);
    }
    else if(numeroIngresado % 2 == 1){
        impares.push(numeroIngresado);
    }
    else{
        datoNoNumerico.push(numeroIngresado);
    }
    numeroIngresado = prompt("Ingrese valores numericos, si desea parar ingrese 0");
}

console.log("Pares: ", pares);
console.log("Impares: ", impares);
console.log("Dato no Numerico: " ,datoNoNumerico);



