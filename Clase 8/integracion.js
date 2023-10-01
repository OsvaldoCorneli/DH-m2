let cursos = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000] ,["nodejs", 15000]]

let cursosAlumno = ["HTML5", "CSS3", "JAVASCRIPT", "REACT" ,"NODEJS"]


function calcularCostoCursos(costos, cursosA){
let count = 0;
for(let i=0; i<costos.length; i++){
  for(let j=0; j<cursosA.length; j++){
    const minuscula = cursosA[j].toLowerCase();
    if(minuscula === costos[i][0]){
        count += costos[i][1];
    }

  }

}
return count;
}

function presupuesto(nombre, apellido, arrayCostos, arrayCursos, cb ){

let monto = cb(arrayCostos,arrayCursos);
let mensajes = [];

let mensaje = (`Estima ${nombre} ${apellido}, en funcion de los cursos selecionados \n`)
for(let i= 0; i<arrayCursos.length; i++){
    mensajes.push(` ${i+1}\. -${arrayCursos[i]} \n`) 
}
let mensaje2 = `El monto total a pagar es de: ${monto}\n Bienvenido a la gran aventura Digital House`

return mensaje.concat(mensajes,mensaje2)
}



console.log(presupuesto("osvaldo", "corneli", cursos, ["JAVASCRIPT", "REACT" ,"NODEJS"], calcularCostoCursos ));
console.log(presupuesto("pepe", "Argento", cursos, ["CSS3", "JAVASCRIPT"], calcularCostoCursos ));
console.log(presupuesto("Bart", "Simpson", cursos, ["HTML5"], calcularCostoCursos ));