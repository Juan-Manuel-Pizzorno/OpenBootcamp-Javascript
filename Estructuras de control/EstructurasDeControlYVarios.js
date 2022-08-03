//-----------------------
//-----------IF---------
///---------------------
const nota=5;
const a=6;
const b="6";


console.log(typeof a);
console.log(typeof b);
// ==  : solo compara el valor
// === : compara el valor y el tipo de dato
// != : son diferentes en valor
// !== : son diferentes en valor y en tipo

if(a==b){
    console.log("a y b son iguales");
}

if(a===b){
    console.log(" a y b son iguales");
}

else{
    console.log("a y b no son iguales")
}


//-----------------------
//-----------FOR`S---------
///----------------------

//for
const lista= [54,21,34,55,67,89];


for(let i=0;i<=10;++i){
    console.log(i);

}

for(let j=0;j<=lista.length;++j){
    console.log(lista[j]);
}

// for of

for(let k of lista){ //está decalrando k a cada elemento de la lista
    console.log(k);    
}

//for each
//esto es exactamnete igual que for of
lista.forEach(k=>{
    console.log(k);
})

// for in 

let persona={
    nombre:"Juan",
    apellido:"Pizzorno",
    edad:34,
    developer:true
}

for(let propiedad in persona ){
    console.log(propiedad); //muestra las propiedades
    console.log(persona[propiedad]); //muestra los parametros de los atributos
}


//Switch

switch(nota){

    case 4:
        console.log("tenes un 4");
        break;

     case 5:
        console.log("Tenes un 5 del Switch");
        break;

     default: //esto debe ir porque sino no sale del swich
        break;   
    }

//---------------------------------------------------------
//---Formas de controlar los bucles con continue y break---
//---------------------------------------------------------

//casos específicos con break y continue, no son buena práctica para usarlos

let Lista=[1,2,3,4,5,6,7,8,9];

for(let i=0;i<Lista.length;i++){
   

    if(Lista[i]===3){
        continue;//vuelve nuevamente al for de arriba sin seguir el codigo para adelante
    }
    console.log(Lista[i]);
    
    if(Lista[i] > 5){
       break;//sale del for
    }
}

//---------------------------------------------------------
//----------Etiquetas en los bucles------------------------
//---------------------------------------------------------

let unidades=0;
let decenas=0;

bucleDecenas:while(true){
    bucleUnidades:while(true){
        console.log(`EL numero es: ${decenas}${unidades}`);
        unidades++;
        if(unidades===10){
            unidades=0;
            break bucleUnidades //sale de aquí
        }
        if(decenas===2){
            break bucleDecenas
        }
    }
    decenas++;
}

    


