let numero1 = 12;
let numero2 = 23;
let operacion = "";
let resultado;

switch(operacion){
    case "sumar":
        resultado = numero1 + numero2
        console.log(resultado)
        break;
    case "restar":
        resultado = numero1 - numero2
        console.log(resultado)
        break;
    case "multiplicar":
    resultado = numero1 * numero2
    console.log(resultado)
        break;
    case "dividir":
        resultado = numero1 / numero2
        console.log(resultado)
        break;
    default:
      resultado = "Las operacion aceptadas son: sumar,restar,multiplicar y dividir";       
      console.log(resultado)    
    }
