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
    fun = checkValue(fun - 20);
    strength = checkValue(strength - 10);
    full = checkValue(full - 10);
    refreshWhite(false);
}

function checkValue(num: number): number {
    return Math.min(Math.max(num, min), max);
}

function refreshWhite(change: boolean) {
    happiness = checkValue((fun + energy + strength + full) / 4);
    refreshBarAndNum("happiness", happiness);
    refreshBarAndNum("fun", fun);
    refreshBarAndNum("energy", energy);
    refreshBarAndNum("strength", strength);
    refreshBarAndNum("full", full);

    if (!change) {
        if (happiness > 50) {
            document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyHappy.png");
        } else if (happiness > 20) {
            document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnySad.png");
        } else {
            document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyBad.png");
        }
    }

    updateHearts();
}

function updateHearts() {
    const heartsElement = document.getElementById("hearts");
    if (heartsElement) {
        const heartCount = Math.round(happiness / 20);
        heartsElement.innerText = "♥".repeat(heartCount);
    }
}

function refreshBarAndNum(id: string, num: number) {
    num = checkValue(num);
    let barId: string = id + "Bar";
    let numId: string = id + "Num";
    let barValue: string = num.toString() + "%";
    const barElement = document.getElementById(barId);
    
    if (barElement) {
        barElement.style.width = barValue;
        if (num <= 50) {
            barElement.style.backgroundColor = "orange";
        } 
        if (num <= 20) {
            barElement.style.backgroundColor = "red";
        } 
        if(num > 50) {
            barElement.style.backgroundColor = "green";
        }
    }
    
    const element = document.getElementById(numId);
    if (element) {
        element.innerText = barValue + " " + id;
    }
}

function eatIceCream() {
    full = checkValue(full + 10);
    energy = checkValue(energy - 0);
    fun = checkValue(fun + 5);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyEat.png");
    refreshWhite(true);
}

function eatCarrot() {
    full = checkValue(full + 20);
    energy = checkValue(energy - 5);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyEat.png");
    refreshWhite(true);
}

function eatMeat() {
    full = checkValue(full + 30);
    energy = checkValue(energy - 10);
    strength = checkValue(strength + 5);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyEat.png");
    refreshWhite(true);
}

function playPs5() {
    full = checkValue(full - 10);
    energy = checkValue(energy - 10);
    strength = checkValue(strength - 10);
    fun = checkValue(fun + 30);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyPlaying.png");
    refreshWhite(true);
}

function playBall() {
    full = checkValue(full - 20);
    energy = checkValue(energy - 30);
    strength = checkValue(strength + 5);
    fun = checkValue(fun + 10);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyPlaying.png");
    refreshWhite(true);
}

function playGambling() {
    full = checkValue(full - 5);
    energy = checkValue(energy - 10);
    strength = checkValue(strength - 5);
    if (Math.random() < 0.5) {
        fun = checkValue(fun + 50);
    } else {
        fun = checkValue(fun - 50);
    }
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyPlaying.png");
    refreshWhite(true);
}

function fightBox() {
    full = checkValue(full - 20);
    energy = checkValue(energy - 20);
    strength = checkValue(strength + 20);
    fun = checkValue(fun + 10);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyFight.png");
    refreshWhite(true);
}

function fightRun() {
    full = checkValue(full - 20);
    energy = checkValue(energy - 30);
    strength = checkValue(strength + 45);
    fun = checkValue(fun - 10);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyFight.png");
    refreshWhite(true);
}

function fightKick() {
    full = checkValue(full - 15);
    energy = checkValue(energy - 20);
    strength = checkValue(strength + 15);
    fun = checkValue(fun + 5);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnyFight.png");
    refreshWhite(true);
}

function sleepBed() {
    full = checkValue(full - 5);
    energy = checkValue(energy + 20);
    strength = checkValue(strength - 5);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnySleep.png");
    refreshWhite(true);
}

function sleepGamba() {
    full = checkValue(full - 40);
    energy = checkValue(energy + 30);
    strength = checkValue(strength - 20);
    fun = checkValue(fun + 5);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnySleep.png");
    refreshWhite(true);
}

function sleepNight() {
    full = checkValue(full - 50);
    energy = checkValue(energy + 70);
    document.getElementById("mrWhiteImg")?.setAttribute("src", "./bunnySleep.png");
    refreshWhite(true);
}

setInterval(() => {
    timeMoving();
}, 10000);
