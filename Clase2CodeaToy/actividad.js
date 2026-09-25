const nombre = "Laura Gómez";
const ciudad = "Pasto";
let edad = 27;
const buscaPrimerEmpleoTech = true;
const lenguajeMeta = "JavaScript";

console.log("========= CARNÉT GENERATION =========");
console.log(`Nombre: ${nombre}`);
console.log(`Ciudad: ${ciudad}`);
console.log(`Edad: ${edad} años (${edad * 12} meses)`);
console.log(`Busca su primer empleo tech: ${buscaPrimerEmpleoTech}`);
console.log(`Quiere dominar: ${lenguajeMeta}`);
console.log("====================================");

// Plus: cumpleaños
edad = edad + 1;

// Plus: tipos
console.log(`Tipos: ${typeof nombre}, ${typeof edad}, ${typeof buscaPrimerEmpleoTech}`);

// Plus: plantilla de varias líneas
console.log(`
¡Feliz cumpleaños, ${nombre}!
Ahora tienes ${edad} años.
`);