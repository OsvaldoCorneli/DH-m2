let peliculas = ["turno de dia","30 noches con mi ex","bestia","el monte","Top gun maverick",
"Elvis", "Thor: amor y trueno"];

function masVendida(array,pelicula){

    let indice = array.indexOf(pelicula)
    let pelicula1 = array[indice].toUpperCase()
    array.splice(indice,1)
    array.unshift(pelicula1)
  return array;
}


