const stringMayuscula = (string) => {
 let stringM = string.toUpperCase();

 return stringM;
}

console.log(stringMayuscula("Hola"))

const tipoDeDato = (dato) => {
    let tipo = typeof dato

    return "El tipo de dato es: "+ tipo;
}
console.log("\n")
console.log(tipoDeDato(23))
console.log(tipoDeDato(false))
console.log(tipoDeDato("perro"))


const edadPerros = (edad) => {
  return "La edad de tu perro es: "+ edad*7

}
console.log("\n")
console.log(edadPerros(13))
console.log(edadPerros(8))

const valorTrabajo = (salario , dias , horas) =>{
 
let totalDias = salario / dias;
let valorHora = totalDias/horas;

return "La paga por hora es de "+valorHora;
}
console.log("\n")
console.log(valorTrabajo(5000,20,10))