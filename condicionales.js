let nota = 5; 
//DESAFIO 
/*Hacer un programa que resuelva segun la nota recibida si : 
a. Estamos entre los mejores promedios 
b. Promocionamos 
c. Regularizamos 
d. Aplazamos

Que de acuerdo al caso imprima un mensaje por consola un mensaje diferente. 

Podemos usar cualquiera de las estructuras condicionales vistas en la clase 
*/


//Una solucion posible desarrollada en clase
// switch (estado) {
//     case 1:
//     case 2: 
//     case 3: 
//         console.log("Lo siento debes recursar");
//         break;

//     case 4: 
//     case 5: 
//     case 6: 
//         console.log("Felicidades regularizaste, pero debes rendir un final ");
//         break;

//     case 7: 
//     case 8: 
//         console.log("Felicidades promocionaste!");
    
//     case 9:
//     case 10:
//         console.log("Felicidades, estas entre los mejores");
//         break;

//     default:
//         console.log("Hey, esa nota no es válida!");
//     break;
// }

//Una solucion a la que le faltan los mejores promedios
// if(nota>= 7){
//     console.log("Felicidades promocionaste!");
// }else if (nota >= 5){ 
//     console.log("Felicidades regularizaste, pero debes rendir un final ");
// }
// else{
//     console.log("Lo siento debes recursar");
// }

// console.log("Continua mi programa.... ");

//Se te ocurren otras ? 

const mensaje =  (nota>=7)?console.log("Felicidades promocionaste!")
               :(nota >= 5)?console.log("Felicidades regularizaste, pero debes rendir un final ")
               :(nota<5)?console.log("Lo siento debes recursar"):console.log("Hey, esa nota no es válida!");
               
