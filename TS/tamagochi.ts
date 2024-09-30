let happiness: number = 50;
let fun: number = 50;
let energy: number = 50;
let strength: number = 50;
let full: number = 50;
const min: number = 0;
const max: number = 100;

document.getElementById("iceCreamBtn")?.addEventListener("click", eatIceCream);
document.getElementById("carrotBtn")?.addEventListener("click", eatCarrot);
document.getElementById("meatBtn")?.addEventListener("click", eatMeat);

document.getElementById("ps5Btn")?.addEventListener("click", playPs5);
document.getElementById("ballBtn")?.addEventListener("click", playBall);
document.getElementById("gamblingBtn")?.addEventListener("click", playGambling);

document.getElementById("boxBtn")?.addEventListener("click", fightBox);
document.getElementById("runBtn")?.addEventListener("click", fightRun);
document.getElementById("kickBtn")?.addEventListener("click", fightKick);

document.getElementById("bedBtn")?.addEventListener("click", sleepBed);
document.getElementById("gambaBtn")?.addEventListener("click", sleepGamba);
document.getElementById("nightBtn")?.addEventListener("click", sleepNight);

function timeMoving(): void {
    fun -= 20;
    strength-= 10;
    full -= 10;
    refreshWhite();
}

function checkValue(num: number): number{
    return Math.min(Math.max(num, min), max);
}

function refreshWhite() {
    happiness = (fun + energy + strength + full) / 4;
    if (happiness > 100) happiness = 100;
    if (happiness < 0) happiness = 0;
    refreshBarAndNum("happiness",happiness);
    refreshBarAndNum("fun",fun);
    refreshBarAndNum("energy",energy);
    refreshBarAndNum("strength",strength);
    refreshBarAndNum("full",full);
    if(happiness > 50){
        document.getElementById("mrWhiteImg")?.setAttribute("src","./bunnyHappy.png");
    } else if (happiness > 20){
        document.getElementById("mrWhiteImg")?.setAttribute("src","./bunnySad.png");
    } else {
        document.getElementById("mrWhiteImg")?.setAttribute("src","./bunnyBad.png")
    }
}

function refreshBarAndNum(id:string, num:number) {
    if(num < 0){
        num = 0;
    }
    if(num > 100){
        num = 100;
    }
    let barId: string = id + "Bar";
    let numId: string = id + "Num";
    let barValue: string = num.toString() + "%";
    const barElement = document.getElementById(barId);
    if (barElement) {
        barElement.style.width = barValue;
        if(num <= 50){
            barElement.style.backgroundColor = "orange";
        } else if (num <= 20){
            barElement.style.backgroundColor = "red";
        } else {
            barElement.style.backgroundColor = "green";
        }
    }
    const element = document.getElementById(numId);
    if (element) {
        element.innerText = barValue + " " + id;
    }
}

function eatIceCream() {
    full += 10;
    energy -= 0;
    fun += 5;
    refreshWhite();
}

function eatCarrot() {
    full += 20;
    energy -= 5;
    refreshWhite();
}

function eatMeat() {
    full += 30;
    energy -= 10;
    strength += 5;
    refreshWhite();
}

function playPs5(){
    full -= 10;
    energy -= 10;
    strength -= 10;
    fun += 30;
    refreshWhite();
}

function playBall(){
    full -= 20;
    energy -= 30;
    strength += 5;
    fun += 10;
    refreshWhite();
}

function playGambling(){
    full -= 5;
    energy -= 10;
    strength -= 5;
    if (Math.random() < 0.5) {
        fun += 50;
    } else {
        fun -= 50;
    }
    refreshWhite();
}

function fightBox(){
    full -= 30;
    energy -= 30;
    strength += 20;
    fun += 10;
    refreshWhite();
}

function fightRun(){
    full -= 20;
    energy -= 30;
    strength += 25;
    fun -= 10;
    refreshWhite();
}

function fightKick(){
    full -= 15;
    energy -= 20;
    strength += 15;
    fun += 5;
    refreshWhite();
}

function sleepBed(){
    full -= 30;
    energy += 20;
    strength -= 5;
    refreshWhite();
}

function sleepGamba(){
    full -= 40;
    energy += 30;
    strength -= 20;
    fun += 5;
    refreshWhite();
}

function sleepNight(){
    full -= 50;
    energy += 70;
    refreshWhite();
}

setInterval(() => {
    timeMoving();
}, 10000);