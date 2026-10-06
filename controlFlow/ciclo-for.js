//! for convercional
//! Tres partes 
// for(inicio, condición, actualización){
//     bloque de codigo que se ejecutará si pasa la condicion
//}

for (let contador = 1; contador <= 5; contador++){
    console.log(contador); 
}

//* Recorrer arrays 
const clientes = ["Pepita", "Pepito", "Carlitos"];
for (const c of clientes){
    console.log("Bienvenidx ", c); 
}

// 1 vuelta → cliente = Pepita 
// 2 vuelta → cliente = Pepito 
// 3 vuelta → cliente = Carlitos


const movimientos = [35000, 120000, 8000, 45000, 60000]
for (const valor of movimientos){
    if(valor > 10000){
        console.log(valor);   
    }
}
