const fs = require('fs');
function writeJSON(arg){
    /* Esta funcion convierte el argumento arg en un formato JSON*/
    let in_json = JSON.stringify(arg,null,2); //se transforma de javascript a JSON
    fs.writeFileSync('./taskData.json',in_json) //se guarda en taskData.json el argumento en formato JSON
}

module.exports = writeJSON;