//--------------------------------------------------------------------------------
//*******************LISTAS,ARRAYS O ARREGLOS*************************************
//--------------------------------------------------------------------------------

const lista= [1,true,"esta es una lista",undefined,null];
const lista2= new Array(1,true,"esta es una lista",undefined,null);
const lista3= new Array(3);
lista3[0]="Soy el primer elemento";
const lista4=[lista,lista2,lista3];//Tengo una lista de listas
//Con el Quokka puedo visualizar luego de cada línea
console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//--------------------------------------------------------------------------------
//*******************OBJETOS******************************************************
//--------------------------------------------------------------------------------
const celular={
    altura:10,
    anchura:5,
    marca:"Xiaomi",
    isWhite:false,
    contactos:["Martín","Raúl","Matias"],
    tarjeta:{ //Objeto dentro de un objeto
        marca:"Sandisk",
        almacenamiento:32
    },
    "altura-tarjeta": 4
}

//Puedo agregar atributos al objeto por fuera y además cambiar sus valores
celular.modelo="MIA2";
celular.marca="Samsung";

console.log(celular["altura-tarjeta"])

//--------------------------------------------------------------------------------
//*******************FECHAS******************************************************
//--------------------------------------------------------------------------------

//Se crea la fecha en este momento y se la guarda en una constante
//Tres formas de definir una fecha
const ahora= new Date();
console.log(ahora);

//1
const fechaMilis= new Date(10);
console.log(fechaMilis);

const fechaCadena= new Date("march 25 2020");
console.log(fechaCadena);

//2
// mes de enero cuenta como 0
const fechaValores= new Date(2022,08,01);
console.log(fechaValores);

//3
const dia= ahora.getDate();
const mes= ahora.getMonth()+1; //ya que 0 lo toma como enero, +1 para lenguaje humano
const anio= ahora.getFullYear();
console.log(dia,mes,anio);