/**Funciones globales */

const BERENJENA = "planta";
var tomate = 82;
let maiz = Symbol("Maiz");

function typesJs(){
    const PAVO = "pavo";
    var pollo = 47;
    let cerdo = false;

    console.log("-------LOCALES--------")
    console.log(PAVO);
    console.log(typeof PAVO)
    console.log(pollo);
    console.log(typeof pollo)
    console.log(cerdo);
    console.log(typeof cerdo)
}

typesJs();
console.log("-------GLOBALES--------")
console.log(BERENJENA);
console.log(typeof BERENJENA)
console.log(tomate);
console.log(typeof tomate)
console.log(maiz);
console.log(typeof maiz)
