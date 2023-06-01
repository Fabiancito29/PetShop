// objeto.metodo(json)

$(document).ready(function() {

$("#formulario5").validate({
  rules: {
    cantidad: {
      required: true,
    },
  }, // --> Fin de reglas
  messages: {
    cantidad: {
      required: "Cantidad es un campo obligatorio",
    },
  },
});
});