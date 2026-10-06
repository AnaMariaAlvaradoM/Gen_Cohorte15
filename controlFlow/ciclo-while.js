let contador = 1;
while (contador <= 5){
    console.log(contador);
    contador++
}

const meta = 1000000;
const ahorroMensual = 150000;
let ahorrado = 0;
let meses = 0;

while (ahorrado < meta){
    ahorrado += ahorroMensual;
    meses++;
}

console.log("Meta alcanzada en", meses , " meses");
console.log("Total ahorrado" , ahorrado);

