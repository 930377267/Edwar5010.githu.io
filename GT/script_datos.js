let nombre = "Juan" ;
let apellido = "Perez";
let edad = 30;
let esEstudiante = true;

   //concatenacion de string

   let saludo= "Hola, " + nombre + "" + apellido + ". tu edad es " + edad + "."

   //cambio de tipo de dato

   let edadstring = edad.toString();

   //uso de metodos de cadena 

   let nombreMayuscula = nombre.toUpperCase();

   //mostrar resultados 

   document.getElementById("texto").innerHTML = `
   <strong>Saludos:</strong>${saludo}<br>
   <strong>Edad como Cadena</strong>${edadstring}<br>
   <strong>Nombre en Mayuscula</strong>${nombreMayuscula}<br>
   <strong>Es Estudiante </strong>${esEstudiante? "si":"no"}
`;
