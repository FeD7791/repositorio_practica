function filter(arg,word){
    /*Esta funcion tiene como parametros la lista de tareas en arg y word la entrada relacionada al titulo de la tarea  */
    function filterer(arg){return arg.title === word}//funcion con condicion
        const tarea = tasks_java.filter(filterer)//Se utiliza el metodo para arreglos y se guarda en tarea, aqui se guardan
        //los objetos cuyos titulos coincidan con la tarea
        //const tarea = tasks_java.filter((arg)=>{arg.title === entrada2});
        console.log(tarea)//se imprimen todos los objetos cuyos titulos coincidan con word
}
module.exports = filter;