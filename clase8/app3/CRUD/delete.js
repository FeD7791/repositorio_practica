const read = require('./read');
const writeJSON = require('./writeJSON')
function borrar(arg,word){
    let b = 'esta es otra variable de prueba';
    /* Esta funcion tiene dos argumentos
    arg= lista de tareas
    word= titulo de la lista de tareas
    La funcion borra la tarea del titulo asignado , tanto titulo como descripcion
    La funcion devuelve para esto un dummy array que es una copia de la lista solo que con menos elementos (o iguales ) */
    let text = read(arg); //se carga la lista de tareas
    let new_array = []//se crea un arreglo vacio (dummy array)
    for (let i=0; i<text.length; i++){
        if(text[i].title === word){//si el titulo coincide con el elemento de la lista no sucede nada
            
        }else{
            new_array.push(text[i]);// si el titulo no coincide con el elemento se llena ese elemento en el dummy array
        }

    }
    writeJSON(new_array)// Envio el arreglo a la funcion writeJSON para que actualize el archivo JSON
    
}
module.exports = borrar;