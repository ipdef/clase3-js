//Crear tu primer array de frutas y mostrar
//cada una de ellas mediante un ciclo tipo while

const frutas = [
    'Manzana',
    'Pera',
    'Plátano',
    'Mango',
    'Melón',
    'Kiwi',
    'Naranja',
    'Melón',
    'Durazno'
];

let counter = 0;

while(counter < frutas.length){
    console.log(frutas[counter]);
    counter++;
}

console.log('La cantidad de frutas en el arreglo es: ', frutas.length);
console.log('El número de iteraciones realizadas en el ciclo wile fue: ', counter);