Esquema para enfrentar un ejercicio, así lo ordeno el profe Francisco y creo que es muy útil para sortear la confusa redacción del desafío Latam

EJERCICIO

1. Agregar los elementos al HTML (input, botón y párrafo o span)
   HTML
   - <input id/>
   - <button onclick="medidaViewport()">
   - <p> o <span donde se renderiza el mensaje>
2. Agregar evento al disparador (el botón)
   onclick = "medidaViewport()"
3. Seleccionar el valor del input y guardarlo en una variable
   utilizamos document.querySelector()
4. Si se cumple la condicion
   a. Seleccionar el párrafo
   b. Modificar el contenido del parrafo (.innerHTML) mostrando medida del viewport correspondiente con el valor ingresado por el usuario
