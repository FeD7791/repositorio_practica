function find(lista,titulo){
    //let lista = read(tasks)
    function finder(arg){
        /* la funcion toma un argumento, que va a ser un elemento de la lista y regresa solo los argumentos cuyos titulos
        sean iguales al valor de la entrada2 que contiene un titulo en especifico*/
        
        return arg.title === titulo
    
    }
    const tareas = lista.filter(finder) /*se guarda en tareas un arreglo de objetos con los titulos que coinciden con la
    palabra, vamos a tener un arreglo de 0 o 1 o varios objetos con el mismo title*/
    
    if(tareas.length>0){
        console.log(tareas[0].title === titulo)/* me basta con escribir el valor de veerdad asocidado al primer elemento para tener
    un true o false */
    }else{
        console.log(false)
    }
    /* el if es indispensable por que si no hay tareas con ese nombre habra error */
}

module.exports = find;
