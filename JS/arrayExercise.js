var dinner = [];

function addCommand(food) {
    dinner.push(food);
}

function showCommand() {
    console.log('Su comanda actual es:' + dinner);
}
console.log('🧑🏽‍🧑🏻‍🧒- ¡Camarero! ¡Camarero! Nos pone por favor una 🍔, un 🌭 con dos 🍟 y dos 🧋 por favor.')

addCommand('🍔');
addCommand('🌭');

showCommand();

console.log('🧑🏽‍🧑🏻‍🧒 - ¡CAMARERO! ¡Camarero! Nos faltan las bebidas (2x🍹) y las patatas (2x🍟).');

for (let i = 0; i < 2; i++) {
    addCommand('🍟');
}

showCommand();

console.log('🧑🏽‍🧑🏻‍🧒 - ¡CAMARERO! ¡CAMARERO! Nos faltan dos bebidas 🍹');

for (let i = 0; i < 2; i++) {
    dinner[dinner.length] = "🍹";
}

showCommand();



