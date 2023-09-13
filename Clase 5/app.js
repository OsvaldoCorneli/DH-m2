const calcularMonto = (tipo,dia,sillaBebe)=>{
let alquiler;
let alquilerTotal;
    tipo === 'Compacto'? alquiler= 14000
    : tipo === 'Mediano'? alquiler= 17000
    : tipo === 'Camioneta'? alquiler = 28000: alquiler = false;
 if(!alquiler){
    return "Ingrese un tipo de vehiculo correcto"
 }   


if(sillaBebe){ 
 alquiler = alquiler + 1200
 alquilerTotal = alquiler * dia
return mensaje = `Estimado cliente: en base al tipo de vehiculo ${tipo} 
alquilado y la silla para bebe extra, considerando los ${dia} dias utilizados, 
el monto 
total a pagar es de $${alquilerTotal}`
}

alquilerTotal = alquiler * dia
return `Estimado cliente: en base al tipo de vehiculo ${tipo} 
alquilado, considerando los ${dia} dias utilizados, el monto 
total a pagar es de $${alquilerTotal}`

};


console.log(calcularMonto("Camioneta",5,true));
console.log("\n")
console.log(calcularMonto('Compacto',3,false));
console.log("\n")
console.log(calcularMonto('Mediano',14,false));
console.log("\n")
console.log(calcularMonto('Mediano',14,true));
console.log("\n")
console.log(calcularMonto('Grande',2,true));

