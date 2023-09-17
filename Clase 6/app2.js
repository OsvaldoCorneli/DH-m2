let peliculas = ["turno de dia","30 noches con mi ex","bestia","el monte","Top gun maverick",
"Elvis", "Thor: amor y trueno"];

function masVendida(array,pelicula){

    let indice = array.indexOf(pelicula)
    let pelicula1 = array[indice].toUpperCase()
    array.splice(indice,1)
    array.unshift(pelicula1)
  return array;
}


function laClaveSecreta(caracteres)
{
let nuevoArray = []
for(let i=0; i<caracteres.length; i++){
  if(caracteres[i] !== "*"){
    nuevoArray.push(caracteres[i])
  }
}

let descifrada = nuevoArray.reverse().join("")

console.log(descifrada)

}

laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"])