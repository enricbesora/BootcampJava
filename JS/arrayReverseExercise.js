const dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🍹', '🍹']; 
console.log('🙍🏻‍♂️ - A ver! Te voy a explicar como se preparan las comandas. Suponiendo que tenemos la comanda anterior, primero las bebidas, luego las patatas y finalmente las hamburguesas. Y un coctel de bienvenida al principio');

function methodReverse(dinner) {
    console.log(dinner.reverse());
}

function methodForAuxiliar(dinner) {
    dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🍹', '🍹']; 
    let auxiliar = [];
    for (let i = 0; i < dinner.length; i++) {
        auxiliar[i] = dinner[(dinner.length - 1) - i]; 
    }
    
    
    console.log(auxiliar);   
}

function methodForNoAuxiliar(dinner) {
    dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🍹', '🍹']; 

    for (let i = 0; i < Math.floor(dinner.length / 2); i++) {
        const temp = dinner[i];
        dinner[i] = dinner[dinner.length - 1 - i];
        dinner[dinner.length - 1 - i] = temp;
    }

    console.log(dinner);
}

function methorForEach(dinner) {
    dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🍹', '🍹']; 

    dinner.forEach((element, index, array) => {
        const reversedIndex = array.length - 1 - index;
        if (index < reversedIndex) {
            [array[index], array[reversedIndex]] = [array[reversedIndex], array[index]];
        }
    });

    console.log(dinner);
}

console.log('Method Reverse-----------');
methodReverse(dinner);

console.log('Method For Auxiliar-----------');
methodForAuxiliar(dinner);

console.log('Method For No Auxiliar-----------');
methodForNoAuxiliar(dinner);

console.log('Method For Each-----------');
methorForEach(dinner);

dinner.unshift('🥂');

console.log(dinner);

