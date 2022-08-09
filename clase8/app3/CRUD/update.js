const read = require('./read'); //funcion paracargar el texto en formato javascript
const writeJSON = require('./writeJSON'); //funcion para escribir el archivo en json Y GUARDARLO
function update(arg,titulo,descripcion){
    /* Esta funcion actualiza una tarea, toma como argumentos arg = lista de tareas
    titulo = titulo de una tarea especifica, descripcion = nueva descripcion para la tarea
    modifica la descripcion de la tarea titulo por descripcion*/
    text = read(arg); //se gurada en text la lista de tareas
    
    for (let i=0; i<text.length;i++){
        if (text[i].title === titulo){
            text[i].desc = descripcion
        }
    }
    writeJSON(text)
}
module.exports = update;