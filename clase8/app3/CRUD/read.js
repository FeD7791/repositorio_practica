function read(arg){
    /*Esta funcion toma como entrada un texto en formato JSON y lo convierte en formato jvascript */ 
    let var_java = JSON.parse(arg); //se parsea de JSON a javascript
    
    return var_java //esta variable es una lista en formato javascript
}



module.exports = read;
