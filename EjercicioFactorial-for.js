/*Enunciado del ejercicio:

Crea los siguientes archivos JS:

- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

*/

let factorial=1;

for(let i=1;i<=10;i++){
   
    factorial=factorial*i
  
}

console.log(`El factrorial de 10 es: ${factorial}`);