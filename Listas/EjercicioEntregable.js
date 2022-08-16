/*Enunciado del ejercicio:

Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

const fechaBastardos= new Date("september 09 2022");
console.log(fechaBastardos);
const fechaAlien= new Date("december 09 1999");
console.log(fechaAlien);
const fechaDepredador= new Date("april 09 1994");
console.log(fechaDepredador);
const fechasPosteriores= new Date("january 01 2010");
console.log(fechasPosteriores);


let listaCompra=["carne","agua","vino","leche","anana"];
listaCompra.push("ACEITE GIRASOL");
console.log(listaCompra);
listaCompra.splice(5,5);
console.log(listaCompra);
const pelisFavoritas=[
    {titulo:"Bastardos sin gloria", director:"Yamael", fecha:fechaBastardos},
    {titulo:"Alien", director:"San Raimi", fecha:fechaAlien},
    {titulo:"Depredador", director:"Michael", fecha:fechaDepredador}
]

console.log(pelisFavoritas);
const pelisPosteriores=pelisFavoritas.filter(obj=>obj.fecha>fechasPosteriores);
console.log(pelisPosteriores);

const directoresOriginales=pelisFavoritas.map((valor)=>`${valor.director}`)
console.log(directoresOriginales);

const titulosOriginales=pelisFavoritas.map((valor)=>`${valor.titulo}`)
console.log(titulosOriginales);

const nuevaLista=directoresOriginales.concat(titulosOriginales)
console.log(nuevaLista);

const listaFactorPropagacion=[...directoresOriginales,...titulosOriginales];
console.log(listaFactorPropagacion);
