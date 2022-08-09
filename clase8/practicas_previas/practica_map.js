
const nombres = [{nombre : 'juan', edad:'15'},{nombre : 'julia', edad:'16'},{nombre : 'juliana', edad:'16'}]

nombres.map((element) => {console.log(element.edad)})
const display_nombres = []
nombres.map((element) => {display_nombres.push(element.edad)})
console.log(display_nombres)
