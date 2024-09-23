const NombreApellidos = () => {
    return "Enric Besora Navarro"
}

function printBool (result) {
    if (typeof result == "boolean")
        console.log(result);
    else
        console.log("No era un bool");
        
}

function infinteNumbers(...number) {
    number.forEach(element => {
        console.log(element);
    });
}

console.log(NombreApellidos());
printBool(true);
infinteNumbers(1,2,3,4,5,6,7,8,9,10);