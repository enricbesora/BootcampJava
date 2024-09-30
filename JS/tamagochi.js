"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
let happiness = 50;
let fun = 50;
let energy = 50;
let strength = 50;
let full = 50;
const min = 0;
const max = 100;
(_a = document.getElementById("iceCreamBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", eatIceCream);
(_b = document.getElementById("carrotBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", eatCarrot);
(_c = document.getElementById("meatBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", eatMeat);
(_d = document.getElementById("ps5Btn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", playPs5);
(_e = document.getElementById("ballBtn")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", playBall);
(_f = document.getElementById("gamblingBtn")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", playGambling);
(_g = document.getElementById("boxBtn")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", fightBox);
(_h = document.getElementById("runBtn")) === null || _h === void 0 ? void 0 : _h.addEventListener("click", fightRun);
(_j = document.getElementById("kickBtn")) === null || _j === void 0 ? void 0 : _j.addEventListener("click", fightKick);
(_k = document.getElementById("bedBtn")) === null || _k === void 0 ? void 0 : _k.addEventListener("click", sleepBed);
(_l = document.getElementById("gambaBtn")) === null || _l === void 0 ? void 0 : _l.addEventListener("click", sleepGamba);
(_m = document.getElementById("nightBtn")) === null || _m === void 0 ? void 0 : _m.addEventListener("click", sleepNight);
function timeMoving() {
    fun -= 20;
    strength -= 10;
    full -= 10;
    refreshWhite();
}
function checkValue(num) {
    return Math.min(Math.max(num, min), max);
}
function refreshWhite() {
    var _a, _b, _c;
    happiness = (fun + energy + strength + full) / 4;
    if (happiness > 100)
        happiness = 100;
    if (happiness < 0)
        happiness = 0;
    refreshBarAndNum("happiness", happiness);
    refreshBarAndNum("fun", fun);
    refreshBarAndNum("energy", energy);
    refreshBarAndNum("strength", strength);
    refreshBarAndNum("full", full);
    if (happiness > 50) {
        (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyHappy.png");
    }
    else if (happiness > 20) {
        (_b = document.getElementById("mrWhiteImg")) === null || _b === void 0 ? void 0 : _b.setAttribute("src", "./bunnySad.png");
    }
    else {
        (_c = document.getElementById("mrWhiteImg")) === null || _c === void 0 ? void 0 : _c.setAttribute("src", "./bunnyBad.png");
    }
}
function refreshBarAndNum(id, num) {
    if (num < 0) {
        num = 0;
    }
    if (num > 100) {
        num = 100;
    }
    let barId = id + "Bar";
    let numId = id + "Num";
    let barValue = num.toString() + "%";
    const barElement = document.getElementById(barId);
    if (barElement) {
        barElement.style.width = barValue;
        if (num <= 50) {
            barElement.style.backgroundColor = "orange";
        }
        else if (num <= 20) {
            barElement.style.backgroundColor = "red";
        }
        else {
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
function playPs5() {
    full -= 10;
    energy -= 10;
    strength -= 10;
    fun += 30;
    refreshWhite();
}
function playBall() {
    full -= 20;
    energy -= 30;
    strength += 5;
    fun += 10;
    refreshWhite();
}
function playGambling() {
    full -= 5;
    energy -= 10;
    strength -= 5;
    if (Math.random() < 0.5) {
        fun += 50;
    }
    else {
        fun -= 50;
    }
    refreshWhite();
}
function fightBox() {
    full -= 30;
    energy -= 30;
    strength += 20;
    fun += 10;
    refreshWhite();
}
function fightRun() {
    full -= 20;
    energy -= 30;
    strength += 25;
    fun -= 10;
    refreshWhite();
}
function fightKick() {
    full -= 15;
    energy -= 20;
    strength += 15;
    fun += 5;
    refreshWhite();
}
function sleepBed() {
    full -= 30;
    energy += 20;
    strength -= 5;
    refreshWhite();
}
function sleepGamba() {
    full -= 40;
    energy += 30;
    strength -= 20;
    fun += 5;
    refreshWhite();
}
function sleepNight() {
    full -= 50;
    energy += 70;
    refreshWhite();
}
setInterval(() => {
    timeMoving();
}, 10000);
