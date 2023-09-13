let operaciones = [502,120,-210,-50,-30,100,654,-300,800]

const calcularSaldo = (array) =>{
let negativo = 0;
let actual = 0;
let total = 0;
    for(let i=0; i<array.length; i++){
     if(array[i]<0){
      negativo+= array[i] 
      total += Math.abs(array[i]);
    }
    else{
        actual +=array[i]
        total += array[i];
    }
    }
    negativo = Math.abs(negativo)

return `El monto total de los depositos es de: ${total}, 
el monton total de los retiros es de ${negativo} por lo tanto, su saldo actual en la cuenta es de: ${actual}`;

}
const cliente =  (nombre, apellido, array, cb)=>{

    const mensaje = cb(array);

    return `Estimado ${nombre} ${apellido} ${mensaje}`
}


console.log(cliente("Osvaldo", "Corneli", operaciones, calcularSaldo));

