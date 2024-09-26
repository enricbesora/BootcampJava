import foods from "./food.mjs";

let foodArray;
const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];

function getAllIcons() {
    return [...new Set(foods.map(food => food.icon))];
};

function checkPlates(aux) {
    if (foodArray.includes(aux)) {
        return foods.filter((food) => food.icon == aux);
    }
    return 0;
}

function getSum(total, num) {
    return total + num;
}


function getPrices(aux) {
    let totalPrices = [];
    ticket.forEach(element => {
        let plate = checkPlates(element);
        if (plate != 0) {
            let aux = [...new Set(plate.map(food => food.price))];            
            totalPrices.push(aux[0]);
        }
    });
    totalPrices.reduce(getSum, 0);
    var sum = totalPrices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    console.log(sum.toFixed(2));
}


foodArray = getAllIcons();

console.log(foodArray);


let plates = checkPlates('🌮');

getPrices(plates);
