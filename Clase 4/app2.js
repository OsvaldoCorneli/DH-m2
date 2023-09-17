let pagoMes = 1000;
let consumoKWH = 500
let interruptor = false
let mensaje = `su total a pagar es de ${pagoMes}`

if(consumoKWH > 300){

let incremento = (pagoMes * 20)/100    
pagoMes += incremento     
interruptor = true;

}

if(interruptor){
mensaje = `Debido a que su hogar tuvo un consumo de 
${consumoKWH}kwh, en base al ajuste tarifario (hogares con consumo 
mayor a 300kwh por mes tendrán un aumento del 20%), 
cumplimos con informarle que se ha ajustado el total 
a pagar, que será de ${pagoMes}` 

}

console.log(mensaje)
