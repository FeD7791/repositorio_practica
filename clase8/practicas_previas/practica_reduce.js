const arreglo = [1,2,3,4,5,6,7,8,9];

function promedio (total,valor){

    

    return total + valor;
}

console.log(arreglo.reduce(promedio))
const mean = arreglo.reduce(promedio) / arreglo.length
console.log(mean);