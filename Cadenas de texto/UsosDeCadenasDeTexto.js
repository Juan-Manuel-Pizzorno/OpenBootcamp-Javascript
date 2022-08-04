//----------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
//----------------------------STRINGS-----------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------


//*****************************************************************************************/
//****************************Formas de uso***********************************************/
//***************************************************************************************/

let cadenaComillaDoble="Hola soy un string";
let cadenaComillaSimple='Hola soy tercer string';
let cadenaComillaDeCostado=`Hola soy otro string`;

console.log(cadenaComillaSimple);
console.log(cadenaComillaDoble);
console.log(cadenaComillaDeCostado);

let textoConComillaSimple= "Ahora veras comillas aquí 'pon aqui el texto'" ;
let textoConComillaSimpleConBarra= 'Ahora veras comillas aquí \'pon aqui el texto\'' ;
let textoConComillaDoble='En este caso el texto está con doble "Justo aqui"';
let textoConComillaDobleConBarre="En este caso el texto está con doble \"Justo aqui\"";

console.log(textoConComillaSimple);
console.log(textoConComillaSimpleConBarra);
console.log(textoConComillaDoble);
console.log(textoConComillaDobleConBarre);

//*****************************************************************************************/
//***Para agregar un valor dentro de un string, si o si debemos usar comilla invertida****/
//***************************************************************************************/

let nombre="Juan";
let saludo=`Hola buenas tardes ${nombre}`;

console.log(saludo);


//*****************************************************************************************/
//***********También lo podemos usar para "PLANTILLAS HTML"*******************************/
//***************************************************************************************/

let plantilla=`

<html>
<h1>Página web de ${nombre}</h1>
<p>Esto es un párrafo</p>
</html

`;

console.log(plantilla);


//***************************************************************************************/
//****************Métodos utilizados*****************************************************/
//***************************************************************************************/

//Longitud del texto
let TextoEjemplo="Texto ejemplo y a modo de prueba como lo muestro";
console.log(TextoEjemplo.length);

//Obtener partes de cadena de caracteres
//slice() substring() substr()

//slice=Mustra desde indice inicial a indice final, slice(indIni,indFin) 
let slice_TextoEjemplo= TextoEjemplo.slice(1,10);
console.log(slice_TextoEjemplo);

//Funciona exactamente igual que slice()
let substring_TextoEjemplo= TextoEjemplo.substring(1,10);
console.log(substring_TextoEjemplo);

//Funciona exactamente igual que slice(), ya está está en desuso por eso está tachado
//substr(posicionDesdeDondeMuestra,posicionXLugaresParaMostrarHaciaDelante);
let substr_TextoEjemplo= TextoEjemplo.substr(1,10);
console.log(substr_TextoEjemplo);

//Reemplazar parte del contenido de una cadena de texto
//Al utilizar strings,solo reemplaza la primera instancia
let TextoLargo=" cada vez que suena, cada vez que huyes, cada vez que lo veas, estás muerto"
console.log(TextoLargo.replace('cada','XXXXX'));

//Al utilizar la expresion regular /g (global), reemplaza todas las instancias
let textoLargo=" cada vez que suena, cada vez que huyes, cada vez que lo veas, estás muerto"
console.log(textoLargo.replace(/cada/g, '11111111'));

//Convertir texto de MAYUSCULA a minúscula, y viceversa
let textoUno="Hola como estás, CADA día Que pASa ";
console.log(textoUno.toLowerCase());
console.log(textoUno.toUpperCase());

//Formas de concatenar cadena de caracteres
let CADENA1=" Esta mañana fuiste?";
let CADENA2=" si, fui, ¿porque?"; 
console.log(CADENA1.concat(" AQUI PUEDO AGREGAR O NO ALGO",CADENA2));
console.log(CADENA1+"AQUI PUEDO ONO AGREGAR"+CADENA2);
console.log(`${CADENA1} ${CADENA2}`);

//Eliminar epacios al inicio y al final
let CADENA3="  Hola soy un string  con espacio adelante y al final.     ";
//tri()
//borra espacios al inicio y al final y muestra la cantidad de caracteres que quedaron
console.log(CADENA3.trim().length);
//borra espacios al inicio y muestra la cantidad de caracteres que quedaron
console.log(CADENA3.trimStart().length);
//borra espacios al final y muestra la cantidad de caracteres que quedaron
console.log(CADENA3.trimEnd().length);

//Obtener caracter de cierta posicion
let CADENA4=" HOLA SOY LA CADENA4";
console.log(CADENA4.charAt(1));
console.log(CADENA4[1]);

//Obtener la posicion de una palabra dentro de una cadena de caracteres
let CADENA5="MI NOMBRE ES JUAN MANUEL Y ME GUSTA EL AAAAARTE, JUAN";
console.log(CADENA5.indexOf("JUAN")); //si la encuentra devuelve la primer posicion, caso contrario -1
console.log(CADENA5.lastIndexOf("JUAN"));//si la encuentra devuelve la ultima posicion, caso contrario -1

//Veces en que se repite una palabra
//https://regexr.com //página para más info de expresiones regulares
let CADENA6="cada vez que el sol sale, vemos como sale en cada día, por ese día una pena imaginaria sería mía";
console.log(CADENA6.match(/cada/g));

//Existe la palabra dentro del texto?
console.log(CADENA6.includes("cada"));
//Saber si texto comienza con una palabra
console.log(CADENA6.startsWith("CADA"));
//Saber si texto termina con una palabra
console.log(CADENA6.endsWith("mía"));
