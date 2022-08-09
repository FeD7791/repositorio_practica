function operaciones(a,b) {
    let c = a + b;
    let d = c + a;
    return d
}

function llamador (variable, callback){
    let c = 3;
    let d = 4;
    let a = variable + callback(c,d)
    return a
}

let resultado = llamador(3,operaciones)
console.log(resultado)