

//Comportamiento de los botones del form
document.addEventListener('DOMContentLoaded', function () {

         // Accede al formulario y agrega un evento cuando se envía
         let form = document.getElementById('contactForm');
         form.addEventListener('submit', function (event) {
                  event.preventDefault(); // Evita que se envíe el formulario por defecto
                  alert("El mensaje será enviado " + nombreUsuario + "!");
                  form.submit();
         });

         //Reseteat formulario 
         let resetButton = document.getElementById('button_reset'); //declaro resetButon como el elemento html con el id button_reset
         resetButton.addEventListener('click', function () { // resetButton usa addEventListener para escuchar el evento 'click' la cual llama a una funcion 
                  let confirmReset = confirm("¿Estás seguro de que deseas resetear el formulario?");
                  if (confirmReset) {
                           alert("Borrara")
                           form.reset();
                  }
         });
});


//eventos de la pagina

console.log(document); //llamo al objeto document , que es u obj nativo del navegador, ya forma parte de este 
const nombreUsuario = document.getElementById('nombreUsuario');
console.log(nombreUsuario.value)


$(document).ready(function(){
         $('.navbar-toggler').click(function(){
             $('.navbar-collapse').toggleClass('show');
         });
     });
     