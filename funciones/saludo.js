//! Funciones 

//& Función base 
// function saludar(){
//     console.log("Hola, gracias por visitarnos");
// }

// saludar();

//! Función con parámtro
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}! Gracias por visitar la tienda.`);
}

saludar("Laura");
saludar("Camilo");


function calcularDescuento(precio){
    const descuento = precio * 0.2;
    const precioFinal = precio - descuento;
    console.log(`Precio total $${precioFinal}`);
}

//console.log(precioFinal);

calcularDescuento(50000000)
calcularDescuento(80000000)
calcularDescuento(70000000)
calcularDescuento(400000)
calcularDescuento(5000000)
calcularDescuento(5000)
calcularDescuento()