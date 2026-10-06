const respuesta = fetch("https://api.open-meteo.com/v1/forecast?latitude=4.6&longitude=-74.1&current=temperature_2m");
console.log(respuesta);

const respuesta1 = fetch("https://thesimpsonsapi.com/api/characters/1");
console.log(respuesta1);

async function obtenerClima() {
  const respuesta = await fetch("https://thesimpsonsapi.com/api/characters/1");
  const datos = await respuesta.json();
  console.log(datos);
}

obtenerClima();

async function obtenerClima() {
  const respuesta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=4.8&longitude=-74.1&current=temperature_2m");

  if (!respuesta.ok) {
    console.log("Algo salió mal. Código:", respuesta.status);
    return;
  }

  const datos = await respuesta.json();
  console.log("Temperatura actual:", datos.current.temperature_2m, "°C");
}

obtenerClima();