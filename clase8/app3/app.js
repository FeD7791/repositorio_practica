const fs = require('fs');
const update = require('./CRUD/update.js');
const borrar = require('./CRUD/delete.js');
const create = require('./CRUD/create.js');
const listar = require('./CRUD/read.js');
const find = require('./CRUD/find.js');
const filter= require('./CRUD/find.js');
const ret_urn = require('./CRUD/return.js');

let tasks = fs.readFileSync('./taskData.json','utf-8')/*Como moraleja es conveniente cargar la lista una sola vez e ir pasando 
las variables*/
let tasks_java = listar(tasks);



let entrada = process.argv[2];
let entrada2 = process.argv[3];
let entrada3 = process.argv[4];

switch(entrada){
    case'list': //Metodo para imprimir la lista de tareas
        console.log(listar(tasks))
        break;
    case 'add': // Metodo para aniadir una nueva tarea por titulo entrada2 y con descripcion entrada3
        create(tasks,entrada2,entrada3);
        break;
    case 'edit'://Metodo para editar la tarea de titulo entrada2 con la nueva descripcion entrada3
        update(tasks,entrada2,entrada3);
        break;
    case 'delete'://Metodo para borrar una tarea que tenga por titulo entrada2
        borrar(tasks,entrada2);
        break;

     //se aniadieron las siguientes funcionalidades   
    case 'filter': //Regresa los titulo de las tareas coincidentes con el parametro de entrada2
        filter(tasks_java,entrada2);
        break
    case 'find'://Retorna true o false segun en parametro entrada2 coincida con algun titulo de alguna tarea
        find(tasks_java,entrada2)
        break

    case 'return'://Retorna la descripcion de la tarea indicada en entrada2
        ret_urn(tasks_java,entrada2);
        break
        


        
            




}