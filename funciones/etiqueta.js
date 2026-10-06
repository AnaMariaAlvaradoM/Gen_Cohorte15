function calcularPrecioFinal(precio) {
  const descuento = precio * 0.2;
  return precio - descuento;
}

function mostrarEtiqueta(nombre, precio) {
  const precioFinal = calcularPrecioFinal(precio);
  console.log(`${nombre} cuesta $${precioFinal}`);
}

mostrarEtiqueta("Camiseta", 45000);