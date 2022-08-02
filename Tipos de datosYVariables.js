//--------------------------------------------------------------------------------
//*******************TIPOS DE DATOS PRIMITIVOS************************************
//--------------------------------------------------------------------------------

//Number
4;

//String
"Hola mundo";
`Hola mundo`;
'Hola munod';

//Booleanos
true;
false;

//Nulos y Sin definir
null;
undefined;

//Diferencias null, undefined, false, 0 ...todas son Falsy
//Null=espacio que está definido en memoria pero está vacio
//Undefined=espacio que no está definido en memoria pero está vacio
//False=valor booleano
//0=valor numerico


//--------------------------------------------------------------------------------
//*******************FORMAS DE DEFINIR VARIABLES**********************************
//--------------------------------------------------------------------------------


var varibleVar;
let variableLet;
//usar let, let afecta en el bloque donde está siendo declaraddo mientras que var afecta a todo el programa

const constante="soy una connstante"; //No se puede modificar
var a=1;
console.log(a);
a=4;
console.log(a);
console.log(constante);

//typeof= sirve para saber que tipo de dato es lo que le estoy pasando
console.log(typeof 1);

//--------------------------------------------------------------------------------
//********************NOTACIONES**************************************************
//--------------------------------------------------------------------------------

//;   = delimitar el final de una linea, en este caso podemos usarlo o no ej: a=5;
//.   = se utiliza en los objetos para acceder a los atributos ej: auto.color
//( ) = funciones ej:function suma(a,b);
//{ } = llaves para objetos, funciones, estructuras de control ej: if(true){ a+1;};
//[ ] = listas,arreglos, arrays ej: const array=[ 1,2,3,4]

