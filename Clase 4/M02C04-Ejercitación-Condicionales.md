﻿**Programación Web Full Stack**

![](Aspose.Words.369573e4-44be-4f57-a229-066e5d85b4df.001.png) **Condicionales**

**Práctica Integradora**

Objetivo

Al ingresar a una aplicación, el usuario podrá tomar diferentes rumbos dentro de ella dependiendo de los datos.

**Por ejemplo:** cuando un usuario ingresa a un sitio web, se evalúa si está o no registrado y en base a ello tendrá o no acceso a ciertos recursos que el sitio ofrece.

Otro **ejemplo** puede ser la diferencia entre aplicar a los productos un descuento o un recargo.

Para poder tener control sobre la ejecución de nuestro programa existen las **estructuras condicionales.** En el desarrollo de esta ejercitación las pondremos en práctica.

Recordemos cómo funcionan las estructuras condicionales…

Pensemos, por ejemplo, si quisiéramos restringir según la mayoría de edad el acceso a un tobogán de agua extremo. En ese caso, tendríamos que saber si la persona es mayor o menor de edad. Esto lo podríamos resolver con una condición muy sencilla.

*let edad= 20;![](Aspose.Words.369573e4-44be-4f57-a229-066e5d85b4df.002.png)*

*if(edad >= 18) {*

*console.log('Puede ingresar') }else{*

*console.log('No puede ingresar') }*

¡Ahora pongamos esto en práctica!

` `2![ref1]
![ref2]**Micro desafío 1:**

Instrucciones

1. Crea una carpeta de trabajo y dentro de ella un archivo JavaScript **(.js).**
1. Desarrolla un programa que le indique al usuario - **en base a su perfil o responsabilidades** - qué puede hacer o no en el sistema. Para eso debes crearuna variable llamada: **“perfil”**y asignarle alguno de estos valores:
1. **administrador**
1. **asistente**
1. **invitado.**

Es importante tener en cuenta que **se debe mostrarun único mensaje,** utilizando el [**console.log()**:](https://developer.mozilla.org/es/docs/Web/API/Console/log)

1. Si se le asigna un espacio en blanco a la variable **perfil,** debe mostrar el mensaje:  “***Debe especificar el perfil del usuario***”**.**
1. Si es un **perfil** “**administrador - ADMINISTRADOR - Administrador**”, la consola debe mostrar este mensaje: “***Usted tiene todos los privilegios de uso del sistema***”.
1. Si es un **perfil**“**asistente -ASISTENTE -Asistente**”, la consola debe mostrar este mensaje: “***Usted sólo tiene permisos de registrar, modificar y consultar datos***”.
1. Sies un **perfil** “**invitado -INVITADO -Invitado**”, la consola debe mostrareste mensaje: “***Usted sólo tiene permisos de consultar datos***”.
1. Si se especifica un valor diferente a la variable **perfil**entonces se debe mostrar este mensaje: “***Debe especificar un perfil válido***”.

Una vez creado el programa, ejecutalo. ***¿Recuerdas cómo?***

Para probar las diferentes respuestas asigna diferentes valores a la variable **“perfil”**creada.

` `3![ref1]
![ref2]**Micro desafío 2:**

Instrucciones

1. En la carpeta ya creada crea un nuevo  archivo JavaScript **(.js).**
1. Desarrolla el programa **Ajuste tarifario de energía eléctrica.** Utilizando elope[rador condicional ternario,](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) queremos determinar cuánto va a pagar un hogar según su consumo. Veamos los pasos a seguir…
   1. Crear una variable “**pagoMes**” y asignarle un **pago actual de energía eléctrica por mes**.
   1. Crear otra variable “**consumoKWH**” y asignarle un consumo mensual de Kilovatios hora de consumo mensual por el hogar.
   1. Si en el hogar se consumen más de 300 kwh pormes, entonces alpago actual se le incrementará un 20%.
   1. En el caso contrario se le mantendrá elsubsidio, es decirque no tendrá ningún aumento..
3. Una vez obtenido el monto del pago por consumo mostrar al usuario este mensaje:

**“Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de  14400”**

` `4![ref1]
![ref2]**Micro desafío 3:**

Instrucciones

1. En la carpeta ya creada  crea un nuevo  archivo JavaScript **(.js).**
1. Desarrollar el programa **traductor condicional**. La idea es que si el usuario ingresa una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la misma palabra traducida al idioma inglés. Te recomendamos usar la estru[ctura switch.](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch) Puedes ayudarte con G[oogle Traductor.](https://translate.google.com.ar/?hl=es)

En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje que le informe que “***La palabra ingresada es incorrecta***”.

` `5![ref1]
![ref2]**Micro desafío 4:**

Instrucciones

1. En la carpeta ya creada,  crea un nuevo  archivo JavaScript **(.js).**
1. Desarrollar el programa **mi primera calculadora.** Queremos que, usando estr[uctura switch,](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch) muestres al usuario cuál es el resultado de una operación aritmética. Esto se hará en base a **dos valores suministrados** y al tipo de **operación** indicada: **“sumar”,  “restar”, “multiplicar”, “dividir”**.

**Por ejemplo:** si el usuario indica que quiere sumar los valores **2** y **2**, entonces la respuesta al usuario debe ser: “**El resultado de sumar2 + 2 es 4**”.

3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un mensaje alusuario que le informe que “***Las operaciones aceptadas son:sumar***

***- restar - multiplicar - dividir*”**.

A continuación te dejamos un **diagrama de flujo**, para que te des una idea de la lógica que podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la [estructura switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)

![](Aspose.Words.369573e4-44be-4f57-a229-066e5d85b4df.005.png)

` `6![ref1]

![ref2]**Desafío extra (opcional):** Instrucciones

Si llegaste hasta acá, estás avanzando muy bien. **¡Felicitaciones!**

Si querés seguir practicando, te proponemos este otro ejercicio. Ten en cuenta que este ejercicio puede escalar en dificultad.

**Paciencia**, trata de resolverlo con las herramientas que tengas a tu disposición. Te recomendamos que busques información extra en Google o documentaciones que conozcas.

1. En la carpeta ya creada,  crear un nuevo  archivo JavaScript **(.js).**
1. Desarrolla el programa **aterrizaravión**. *Nos indicará si el avión está listo para iniciar el aterrizaje o no.* Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta que:
- La **velocidad** debe estar comprendida **entre  268 a 278 km/hr**.
- La **altura** debe estar comprendida entre **150 m a 300 m.**

Cuando tengas alguna duda que te impida avanzar, puedes preguntarle a tus compañeros y profesores.

**¡ Éxitos !**
` `7![ref1]

[ref1]: Aspose.Words.369573e4-44be-4f57-a229-066e5d85b4df.003.png
[ref2]: Aspose.Words.369573e4-44be-4f57-a229-066e5d85b4df.004.png
