function returnn(tasks,titulo){
    /*esta funcion toma como entrada la lista de tareas tasks y una palabra para buscar en titulo seguidamente busca los objetos cuyos 
    titulos coincidan con la palabra titulo*/
    function returner(arg){return arg.title === titulo}//funcion para ser utilizada como condicion para el metodo filter
        const tareas = tasks.filter(returner)//regresa un arreglo con los objetos cuyo titulo coincidan con titulo
        
        if(tareas.length >0){
            /*Este if es necesario por que tareas puede ser un arreglo vacio  */
            console.log(tareas[0].desc)
        }else{
            console.log('no hay tareas con ese nombre')
        
        }

}
module.exports=returnn