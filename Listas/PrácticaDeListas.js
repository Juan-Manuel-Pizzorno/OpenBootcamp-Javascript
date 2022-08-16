let var1={id:false};
let lista=[34,"luis",false,{ id: 5 },null,undefined,var1];
console.log(lista);

//Método para introducir valores en los arrays
//.push() .unshift()
//Valores al final= push
lista.push("final",45,true);
console.log(lista);

//Valores al principio= Unshift
lista.unshift("inicio",0,1,2,4,null);
console.log(lista);

//Métodos para eliminar valores de los arrays
//.pop() .shift()= mutan el valor del array

let array=[1,2,"hola",false];
//Valores al final= Pop
array.pop();
console.log(array); //elimina el ultimo elemento

//Valores al principio=shift
array.shift();
console.log(array);

//Método para añadir, modifiar o eliminar
// .splice(x,y,z)
let array2=[1,2,3,4,5,6,7,8,9];

//Eliminar valores .splice(indice,NumValoresAEliminar)
array2.splice(2,3);
console.log(array2);

//Añadir valores .splice(indice,0,valores)
array2.splice(2,0,"hola",3);
console.log(array2);

//Modificar valores .splice(indice,1,valores)
array2.splice(2,1,0,0);
console.log(array2);


//Concatenar 2 listas
let lista1=["hola",2,false,null];
let lista2=["adios",8,true,undefined];
let lista3=lista1.concat(lista2);
console.log(lista3);

//Unir 2 listas con factor de propagación
console.log(...lista3);
let lista4=[...lista1,...lista2];
console.log(lista4);

//Obtener lista a partir de otra .slice()
let lista6=["hola",1,2,3,true,null,"adios"];
//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(lista6.slice(1,4));
let lista7=lista6.slice(2,5);
console.log(lista7);
let lista8=lista6.slice(2,-2);
console.log(lista8);

//Iterar valores de una lista
let listaA=["HOLA",0,1,2,3,4,5,6,true,null,"adios"];

//Forma antigua poco eficiente
for(let i=0;i< listaA.length;i++){

    console.log(listaA[i]);

}

//Forma moderna (ES6) mas eficiente .forEach()
let suma=0;
listaA.forEach(valor=>{
    suma+=valor;
    console.log(valor);
    
})

//Busqueda dentro de una lista .find()

let variable=listaA.find(valor=>{
    if(valor==3){
        console.log("Elemento presente");
    }
})

const listaObjetos=[
    {nombre:"Carlos", edad:45},
    {nombre:"Juan", edad:28},
    {nombre:"Monica", edad:56},
    {nombre:"Marcos", edad:76},
    {nombre:"Adriana", edad:3}
]

let valorABuscar=listaObjetos.find(o=>{
    if(o.nombre==="Monica"){
        console.log("Monica está");
        console.log(o.edad);
    }
})


//De forma mas abreviada
const {edad}=listaObjetos.find(o=>o.nombre==="Adriana");
console.log(edad);

//TRABAJAR CON MÉTODOS MÁS AVANZADOS
//.map() . filter() .reduce()

//.map()
const array3=["San Sebastian","Madrid","Barcelona","Alicante","Bilbao"];
const newArray3=array3.map((valor,indice)=>`${indice+1} - ${valor}`)
console.log(newArray3);

//.filter()

const listaObjetos2=[
    {nombre:"Carlos", edad:45},
    {nombre:"Juan", edad:28},
    {nombre:"Monica", edad:56},
    {nombre:"Marcos", edad:26},
    {nombre:"Adriana", edad:3}
]

const personasMayores30=listaObjetos2.filter(obj=>obj.edad>30);
console.log(personasMayores30);

//Si queremos que no aparezca monica por ejemplo
const chauMonica=listaObjetos2.filter(obj=>obj.nombre!=="Monica");
console.log(chauMonica);


//.reduce()
const valores2=[3,4,55,77,89,567];
const sumar=valores2.reduce((acumulado,cur,i,arrayOriginal)=>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado+cur;
})
console.log(sumar);

//ORDENAR
// .sort()
const arrayNumerico=[34,5,-6,89,6079,4,50,1];
arrayNumerico.sort((a,b)=>b-a);//ordena de mayor a menor
console.log(arrayNumerico);
arrayNumerico.sort();//ordena de menor a mayor
console.log(arrayNumerico);


//Ordenar objetos
const listaObjetos3=[
    {nombre:"Carlos", edad:45},
    {nombre:"Juan", edad:28},
    {nombre:"Monica", edad:56},
    {nombre:"Marcos", edad:26},
    {nombre:"Adriana", edad:3}
]

listaObjetos3.sort((a,b)=>a.edad-b.edad);//ordena y retorna de menor a mayor por edad
console.log(listaObjetos3);

//Comparar listas
// .every()
const listaB=[-1,44,-6,897,66,-3];
const resultado=listaB.every(valor=>valor>0); //Pregunto si todos los valores son mayores a 0
console.log(resultado);

let ar1=[33,55,78,90,543];
let ar2=[33,55,78,90,543];

//Para comparar si 2 arrays son iguales
const comparaArrays=(array_1,array_2)=>{
    if(array_1.length!==array_2.length)return false; //si no tienen el mismo largo me voy
    const result=array_1.every((valor,i)=>valor===array_2[i]); //compara cada valor de array1 con cada valor de array2
    return result;
}

console.log(comparaArrays(ar1,ar2)); //Muestra por pantalla el resultado de la llamada a la funcion

//Existe valor en array
//.some()
const aarray=[90,13,44,76,90,-4];
const valorExiste=aarray.some(valor=>valor===44);
console.log(valorExiste);

const listaObjetos4=[
    {nombre:"Carlos", edad:45},
    {nombre:"Juan", edad:28},
    {nombre:"Monica", edad:56},
    {nombre:"Marcos", edad:26},
    {nombre:"Adriana", edad:3}
]

const existeAdriana=listaObjetos4.some(persona=>persona.nombre==="Adriana");
console.log(existeAdriana);


//Como obtener una lista a partir de un objeto iterable

let palabra="Hola soy Juan";
let ar_palabra=Array.from(palabra);
console.log(ar_palabra);

const set=new Set([2,3,"hola",4]);
const ar_set=Array.from(set);
console.log(ar_set);

const keys=array.keys();
console.log(keys);
const ar_keys=Array.from(keys);
console.log(ar_keys);
