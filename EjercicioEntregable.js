/*
Enunciado del ejercicio:

Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const fechaNacimiento= new Date(1993,09,14);

const libro={
    titulo:"Clean Code: A Handbook of Agile Software Craftsmanship",
    autor:"Robert C. Martin",
    fecha:2008,
    url:"https://www.buscalibre.com.ar/libro-clean-code-a-handbook-of-agile-software-craftsmanship-libro-en-ingles/9780132350884/p/2045256"
}

const lista= ["Juan Manuel",28,true,fechaNacimiento,libro];
console.log(lista);