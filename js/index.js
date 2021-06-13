//scope -var, let y const
var var_test = "hola global";
if(true){
    var var_test = "hola, dice var";
}
alert(var_test);

let let_test = "hola global";
if(true){
    let let_test= "hola, dice const";
}
alert(let_test);

const const_test = "hola global";
if(true){
    const const_test= "hola, dice const";
}
alert(const_test);

//readignacion de valor de variables
var color = '#f00';
color = 'red';
console.log(color);

let color2 = '#f00';
color2 = 'red';
console.log(color2);

const COLOR_RED = '#f00';
//COLOR_RED = 'red';
console.log(COLOR_RED);

//diferentes formas de crear un array  --snakecase
let carBrands = [];
carBrands[0] = 'Audi';
carBrands[1] = 'Bugatti';
carBrands[2] = 'BMW';
carBrands[3] = 'Ford';
carBrands[4] = 'Fiat';
carBrands[5] = 'Hyundai';
carBrands[6] = 'Lexus';
carBrands[7] = 'Peugeot';
carBrands[8] = 'Renault';
console.log(carBrands);

let car_brands2 = ['Audi','Bugatti','BMW','Ford','Fiat','Hyundai','Lexus','Peugeot','Renault'];
console.log(car_brands2);

let colors = new Array();
colors[0] = 'azul';
colors[1] = 'amarillo';
colors[2] = 'verde';
colors[3] = 'rojo';
console.log(colors);

let colors2 = new Array('azul','amarillo','verde','rojo');
console.log(colors2);

//INDEXOF y acceder a solo una posición
console.log("Index del color 'varde': " + colors.indexOf('verde'));
console.log("Color con index 2: " + colors2[2]);

let shoppinglist = new Array('leche', 'mostaza', 'fideos','arroz','arvejas','manzanas');
console.log("Lista de compras inicial: " + shoppinglist);
//UNSHIFT - agregar elemento al inicio
shoppinglist.unshift('bananas');
console.log("Lista de compras tras unshift: " + shoppinglist);

//SHIFT - eliminar elemento al inicio
shoppinglist.shift();
console.log("Lista de compras tras shift: " + shoppinglist);

//PUSH - agregar elemento al final
shoppinglist.push('espinaca');
console.log("Lista de compras tras push: " + shoppinglist);

//POP - eliminar elemento al final
shoppinglist.pop();
console.log("Lista de compras tras pop: " + shoppinglist);


//JOIN
let months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','setiembre','octubre','noviembre','diciembre'];
console.log("Meses unidos con join: " + months.join(' - '));

//LENGTH
console.log("Length del array meses: " + months.length);

//SPLICE, recortar segunda mitad del año dejando la primera mitad del año
months.splice(6, 12);
console.log("Meses después del primer splice: " + months);

//SPLICE, reemplazando un elemento
months.splice(1, 1, '02');  
console.log("Meses después del segundo splice: " + months);

//SPLICE, agregar un elemento sin eliminar ninguno
months.splice(1, 0, 'nuevo mes');
console.log("Meses después del tercer splice: " + months);

//SORT Y REVERSE
let countries = ['Mexico','España','Argentina','chile','Colombia','Venezuela','Peru','Costa Rica'];

console.log("Array reverse: " + countries.reverse());
console.log("Array sort y reverse: " + countries.sort().reverse());
console.log("Array sort: " + countries.sort());


