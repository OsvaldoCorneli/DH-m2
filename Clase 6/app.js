let electrodomesticos = ["Heladera", "Lavarropas", "Horno Microondas", "Televisor", "Licuadora", "Aspiradora"];

electrodomesticos.map(element => console.log("electrodomestico:", element));

console.log("electrodomestico:", electrodomesticos[3]);
let primerElemento = electrodomesticos.shift()
electrodomesticos.push(primerElemento);

let nuevosElectrodomesticos = ["Aire acondicionado","Calefaccion "]

const arrayConcatenado = electrodomesticos.concat(nuevosElectrodomesticos);

console.log(arrayConcatenado);

const elementoABuscar =  "Heladera";
const indice = electrodomesticos.includes(elementoABuscar)

let existe = indice ? "Producto encontrado" : "El producto buscado no existe"




const cadenaTexto = electrodomesticos.join(" ")



const newArray = electrodomesticos.map((electrodomestico) => {
  if (electrodomestico === "Lavarropas") {
    return "Procesadora";
  }
  return electrodomestico;
});

const nuevoElectrodomestico = newArray.join(" ");

console.log(cadenaTexto);
console.log(nuevoElectrodomestico);
console.log("cantidad de elementos:",electrodomesticos.length);

console.log(existe)