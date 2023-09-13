const frase = "la mejor academia de pramacion de latam es Digital House";

const palabras = frase.split(" ");

const nuevaFrase = palabras.map((palabra) => {
  if (palabra === "pramacion") {
    return "programacion";
  }
  return palabra;
});

const resultado = nuevaFrase.join(" ");

console.log(resultado)
console.log(frase)