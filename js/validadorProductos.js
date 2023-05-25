// objeto.metodo(json)

$(document).ready(function() {

$("#formulario4").validate({
  rules: {
    id: {
      required: true,
    },
     nombre: {
      required: true,
    },
    descripcion: {
      required: true,
    },
    precio: {
      required: true,
    },
    descuentoPorOferta: {
      required: true,
    },
    descuentoSubscriptor: {
      required: true,
    },
  }, // --> Fin de reglas
  messages: {
    id: {
      required: "El ID es un campo obligatorio",
    },
    nombre: {
      required: "Nombre es un campo obligatorio",
    },
    descripcion: {
      required: "La descripción es un campo obligatorio",
    },
    precio: {
      required: "El precio es un campo obligatorio",
    },
    descuentoPorOferta: {
      required: "El descuento por oferta es un campo obligatorio",
    },
    descuentoSubscriptor: {
      required: "El descuento subscriptor es un campo obligatorio",
    },
  },
});
});