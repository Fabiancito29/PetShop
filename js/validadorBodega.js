// objeto.metodo(json)

$(document).ready(function() {

$("#formulario5").validate({
  rules: {
     nombre: {
      required: true,
    },
    cantidad: {
      required: true,
    },
  }, // --> Fin de reglas
  messages: {
    nombre: {
      required: "Nombre es un campo obligatorio",
    },
    cantidad: {
      required: "Cantidad es un campo obligatorio",
    },
  },
});
});