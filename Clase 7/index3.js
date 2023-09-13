const frase = 'practicando el uso de los ciclos o bucles';
const numeroPositivos = [1,2,3,4,5,6,7,8,9,10];

function muestraDiez(num){

for(i = num+1; i<num+11; i++){
    console.log(i)
}    
}

const saltandoDeTre = ()=>{

    for(i=1; i<58; i=i+3){
    console.log(i);
}}


function sumatoria(){
let sumatoria = 0
for(let i=1; i<=100; i++){

sumatoria += i;}

return `La sumatoria de todos los numeros entre 
el 0 y el 100 es: ${sumatoria}`
}



const fraseMayuscula = (string)=>{
let arrayString = string.split(' ');

for(let i=0; i<arrayString.length; i++){

    console.log(arrayString[i].toUpperCase())
}
}

const pares = (array)=>{
   
    let newArray = []

    for(let i=1; i<array.length; i++){
        
        if(array[i] % 2 === 0){
       newArray.push(array[i])

    }}
return newArray;
  
}

muestraDiez(35);
console.log("\n")
saltandoDeTre();
console.log("\n")
console.log(sumatoria());
console.log("\n")
fraseMayuscula(frase);
console.log("\n")
pares(numeroPositivos);
