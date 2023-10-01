**Programación Web Full Stack**

![](Aspose.Words.4eca612d-2dd7-40e8-9ae0-abce2b3908e6.001.png) **Integración**

**Práctica Integradora**

Objetivo

Vamos a ejercitar todo lo aprendido hasta el momento a través de distintos desafíos.

Recuerda que siempre puedes revisar el material visto. Si no encuentras algo, puedes consultar con tus profesores y compañeros, así como también googlear la información que creas necesaria. Te sugerimos consultar documentaciones oficiales como  la de MDN[ Web Docs,](https://developer.mozilla.org/es/) [W3School](https://www.w3schools.com/)o foros reconocidos como S[tack Overflow.](https://es.stackoverflow.com/)

Cuando tengas alguna duda que te impida avanzar, puedes preguntarle a tus profesores.

**¡ Éxitos !**

` `1![ref1]
![ref2]**Micro desafío 1:**

Instrucciones

1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript **(.js).**

Facturación  - Cursos DH

2. El Tech Leader de nuestro equipo nos informa que debemos realizar un código que permita **calcularel monto a pagarporun alumno basándose en los cursos que desea tomar en Digital House**. Deberás seguir los siguientes pasos para lograr el objetivo:
1. Crear un array [multidimensional q](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays)ue contenga los nombres de los cursos y su precio en pesos: *“html5, 4000”, “css3, 5000”, “javascript, 10000”, “react, 7000”, “nodejs, 15000”.*
1. Crear un array que contenga los cursos que el alumno quiere tomar con DH. Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
1. Crear una ***función*** ([Callback) ](https://developer.mozilla.org/es/docs/Glossary/Callback_function)que reciba como ***parámetros*** el ***array multidimensional de los cursos*** y el otro ***array que indica los cursos que quiere hacer el alumno***. La función tendrá la responsabilidad de ***calcular y devolver el monto total a pagar porelalumno*** en función de los cursos que quiere realizar. No olvides que en el array multidimensional los nombres de los cursos están escritos en letras minúsculas y tienes que pasarlas a [MAYÚSCULAS](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase).
1. Crear otra ***función*** que reciba como ***parámetros*** el ***nombre y elapellido del alumno***, el ***array multidimensional de los cursos con sus respectivos precios** y el **array que contiene qué cursos quiere hacer el alumno**.* Esta función tendrá la responsabilidad de **retornar** el ***nombre y el apellido del alumno*** y el***monto total a pagar**en función de los cursos que quiere realizar.*
1. Una vez creado elprograma, ejecutalo. Para verificarlos resultados solicitados, invoca a la segunda función, asigna diferentes valores o argumentos y no olvides utilizar el [console.log() ](https://developer.mozilla.org/es/docs/Web/API/Console/log)para mostrar los resultados al usuario. Te compartimos un ejemplo:

![ref1] 

Estimado Luis Fuentes, en función de los cursos seleccionados: 1.- HTML5![](Aspose.Words.4eca612d-2dd7-40e8-9ae0-abce2b3908e6.004.png)

2\.- CSS3

3\.- JAVASCRIPT

4\.- NODEJS

El monto total a pagar es de: $34000.

Bienvenido a la gran aventura Digital House.

Instrucciones

1. En la carpeta ya creada, crea un nuevo  archivo JavaScript **(.js).**

Promedio alumnos graduados por curso

2. El Tech Leader, nos **¡Felicita!** por los avances realizados en el desafío anterior. Dado que hemos mostrado bastante expertise, sube su exigencia ynos pide que ayudemos a uno de los equipos de desarrollo. Necesitan un código que permita determinar el promedio de alumnos egresados por curso. Para lograrlo debemos realizar lo siguiente:
1. Crear cuatro variables y asignar a cada una las siguientes cadenas de texto:
1. **Graduados de HTML5:  “30 45 25 34 18 23 16 50 72 70”**
1. **Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”**
1. **Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”**
1. **Graduados de NODEJS: “45 56 73 34 65 72 70 32”**
2. A cada una de las variables que contienen las cadenas de texto, habrá que ***convertirlas a arrays***, separando cada elemento poruna coma
2. Crear una **función** que reciba como ***parámetros los cuatro arrays*** de los alumnos graduados y***un número comprendido entre el1 y el 4***, donde:
1. **1 = HTML5**
1. **2 = CSS3**
1. **3 = JAVASCRIPT**
1. **4 = NODEJS**

La función tendrá la responsabilidad de ***calcular y devolver el promedio de graduados*** del curso indicado. Si el parámetro del curso es un valor diferente del 1 al 4, deberá retornar un mensaje al usuario indicando cuales son los valores asignados a cada curso.

![ref2]**Desafío extra (opcional):** Instrucciones

Si llegaste hasta acá, significa que vienes trabajando muybien con los diferentes contenidos vistos hasta el momento. **¡Felicitaciones!**

Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te proponemos que desarrolles las siguientes funciones:

En la carpeta ya creada, crea un nuevo archivo JavaScript **(.js)** por cada nueva función que desarrolles**.**

1. Crear una función **encontrar el número,** que reciba por parámetros un array de números y un número. La función deberá evaluar sielnúmero proporcionado existe o no en el array. De existir debe devolver el mensaje “**El número XX sí existe en el array**”. En el caso contrario debe mostrar el mensaje: “**El valor solicitado no existe**”.
1. Crear una función **Juego de trompito**, que reciba dos parámetros:
1. Elprimero, un arraycon las siguientes cadenas de texto: ***“Toma 1”,”Toma 2”, “Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”***
1. El segundo parámetro será la cantidad de vueltas del trompito comprendidas entre 2 y 6.

La función tendrá como responsabilidad generar un número aleatorio comprendido entre 0 y5. En función delresultado obtenido, se le debe devolveralusuario alguno de los mensajes suministrados por el trompito. Por ejemplo: “***Toma todo”.***

***Pista:*** investigar sobre  las funcionesM[ath.random() y M](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random)a[th.floor().](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

3. Crear una función **sumatoria de pares e impares**, que recibirá por parámetros un array con diez valores numéricos. La función tendrá la responsabilidad de devolver al usuario la sumatoria total de los números pares y de los números impares.

**Pista:** investigar sobre elo[perador módulo.](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)
` `5![ref1]

[ref1]: Aspose.Words.4eca612d-2dd7-40e8-9ae0-abce2b3908e6.002.png
[ref2]: Aspose.Words.4eca612d-2dd7-40e8-9ae0-abce2b3908e6.003.png
