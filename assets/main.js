 
 //Declaramos fx

 /*Este bloque de código será ejecutado cuando se llame a esta función al hacer clic en el botón*/

 function medidaViewport() {

    //creamos var y asignamos seleccion valor del input
    let valorInput = document.querySelector('#valorInput').value;

    //creamos var par y le asignamos seleccion de ele x por id, donde mostratremos resultado
    let par = document.querySelector('#parrafo');


    if (valorInput < 576) {

        // PAR es la variable que contiene la referencia al elemento HTML con el ID parrafo. Es un <p> en HTML.

        // innerHTML es una propiedad del elemento que representa su contenido HTML interno.
        //Cuando asignas un valor a esta propiedad, reemplazas todo el contenido existente dentro del elemento.
        //En este caso, estás estableciendo el contenido del párrafo con un mensaje dinámico.

       //`El valor ${valorInput} corresponde a una medida xs` es un Template literal.

       //El texto entre las comillas invertidas (backticks, `) es un template literal, que permite incluir variables y expresiones directamente dentro de cadenas de texto.

       //Usamos ${valorInput} para insertar el valor de la variable valorInput dentro del mensaje.
       //Template literals es más claro que concatenar con cadenas:
       //par.innerHTML = "El valor " + valorInput + " corresponde a una medida xs"; REDUCE ERRORES Y MEJORA LEGIBILIDAD

       //Esta línea toma el valor del input (valorInput), lo inserta en un mensaje de texto dinámico y lo coloca como el contenido interno del párrafo (parrafo) en el HTML.
       
       par.innerHTML = `El valor ${valorInput} corresponde a una medida xs`;
        
      } else if (valorInput >= 576 && valorInput <= 768) {

        par.innerHTML = `El valor ${valorInput} corresponde a una medida sm`;

      } else if (valorInput >= 768 && valorInput <= 962) {
        par.innerHTML = `El valor ${valorInput} corresponde a una medida md`;
      } else if (valorInput > 962) {
        par.innerHTML = `El valor ${valorInput} corresponde a una medida xl`;
      } else {
        par.innerHTML = `Debes ingresar un numero valido`      }


 }

 

     