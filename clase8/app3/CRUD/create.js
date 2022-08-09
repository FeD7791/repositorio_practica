const read = require('./read');
const writeJSON = require('./writeJSON');
function create(arg,titulo,descripcion){
    /*Esta funcion posee 3 argumentos
    arg: lista en formato javascript
    titulo: titulo de una tarea 
    descripcion: descripcion de la tarea
    La funcion agrega la nueva tarea y su descripcion a la lista de tareas */
    lec = read(arg); //se carga la lista de tareas
    lec.push({title : titulo ,desc : descripcion});//se aniade las nuevas tareas a la lista
    writeJSON(lec);//se llama a la funcion para transformar a formato JSON

}

module.exports = create;