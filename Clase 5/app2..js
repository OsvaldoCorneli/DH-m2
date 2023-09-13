
const comidaRapida = (tipo, jamon, queso, salsaTomate, mayonesa, 
    mostaza,tomate, lechuga, cebolla ) => {
let resultado;

switch(tipo){
case "Carne a la parrilla":
    resultado = 1800
break;

case "Pollo":
    resultado = 1500
break;

case "Vegetariana":
    resultado = 1200
break

default:
    return false;
    
}

if(jamon){
    resultado = resultado + 30;
}
if(queso){
    resultado = resultado + 25;
}
if(salsaTomate){
    resultado = resultado + 5;
}
if(mayonesa){
    resultado = resultado + 5;
}
if(mostaza){
    resultado = resultado + 5;
}
if(tomate){
    resultado = resultado + 15;
}
if(lechuga){
    resultado = resultado + 10;
}
if(cebolla){
    resultado = resultado + 10
}
return resultado;
}

const mensajeUsuario = (nombre, apellido, tipo, jamon, queso, salsaTomate,
    mayonesa, mostaza,tomate, lechuga, cebolla, funcion) => {
        
     const resultado = funcion(tipo, jamon, queso, salsaTomate,
                     mayonesa, mostaza,tomate, lechuga, cebolla, funcion)
    if(!resultado){
        return "Ingrese un tipo de hamburguesa valida"
    }  else{
    
return `Estimado ${nombre} ${apellido} el monto total a pagar es de: $${resultado} `
    }
}



//            nombre ,apellido ,tipo  , (booleano) jamon, queso, salsaTomate, mayonesa, mostaza,tomate, lechuga, cebolla 
console.log(mensajeUsuario("Osvaldo","Corneli","Carne a la parrilla",  true , true, false , false , true , true , true, false,comidaRapida))

console.log(mensajeUsuario("Juan","Perez","Vegetariana",  false , false, true , false , true , true , true, true,comidaRapida))

console.log(mensajeUsuario("Jorge","Diaz","Pollo",  true , true, true , true, true , true , true, true,comidaRapida))

console.log(mensajeUsuario("Fulanito","","Pescado",  false , false, true , false , true , true , true, true,comidaRapida))

