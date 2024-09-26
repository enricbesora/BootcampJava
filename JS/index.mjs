import foods from "./food.mjs";

let foodArray;

function getAllCategories() {
    return [...new Set(foods.map(food => food.category))];
};



function searchCategory(category) {
    if(foodArray.includes(category)){
        console.log("It's included");
        return true;
    }
    
    else
        console.log("It's not included");
        return false;
}

function checkPlates(aux) {
    if(searchCategory(aux)){
        return foods.filter((food) => food.category == aux);
    }
    return false;
}

foodArray = getAllCategories();

console.log(foodArray);

searchCategory("Healthy");

console.log(checkPlates("Healthy"));

