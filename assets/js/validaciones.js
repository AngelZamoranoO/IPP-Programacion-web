// espera que se carge el codigo html para luego ejecurar el codigo de js

$(document).ready(function () {
  // Definimos la funcion para los formularios
  function validarFormulario(event) {
    // inicializa los campos vacios en el arreglo
    var camposVacios = [];

    // crea variable para ingresar nombre y apellido
    var nombreApellido = "Angel Zamorano";

    // iterar para para ver los campos vacios

    $(this)
      .find("input, textarea")
      .each(function () {
        // verifica si el campos actual tiene solo vacios
        if ($(this).val().trim() == "") {
          // si el campos esta vacio, añadir el campo del nombre
          camposVacios.push($(this).attr("name"));
        }
      });

    if (camposVacios.length > 0) {
      // detener el envio del formulario
      event.preventDefault();

      // una alerta en los campos vacios
      alert(
        "Faltan completar los siguientes campos: " +
          camposVacios.join(", ") +
          "\n" +
          nombreApellido
      );
    }
  }
  // Asocias la funcion validar con el evento submit
  // Agregamos el metodo submit  a todos los formularios
  $("#form-productos, #form-categorias").on("submit", validarFormulario);
});
