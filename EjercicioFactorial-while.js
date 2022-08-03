/*Enunciado del ejercicio:

Crea los siguientes archivos JS:

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

*/

let factorial=1;
let i=1;

while(i<=10){
    factorial=factorial*i;
    i++;
}

console.log(`El factorial de 10 es: ${factorial}`);