/*Enunciado del ejercicio:

Crea los siguientes archivos JS:

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

*/

let factorial=1;
let i=1;

while(i<100){
    if(i===11){
        break;
    }
    factorial=factorial*i;
    i++;

}

console.log(`EL factorial de 10 es: ${factorial}`);
