// objeto.metodo(json)

$(document).ready(function() {

$("#formulario3").validate({
  rules: {    
    correo: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 5,
    },
  }, // --> Fin de reglas
  messages: {
    correo: {
      required: "El correo es un campo obligatorio",
      email: "El formato del correo no es válido",
    },
    password: {
      required: "La contraseña es un campo obligatorio",
      minlength: "Mínimo 5 caracteres",
    },
  },
});
});