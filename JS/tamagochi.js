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
    fun = checkValue(fun - 20);
    strength = checkValue(strength - 10);
    full = checkValue(full - 10);
    refreshWhite(false);
}
function checkValue(num) {
    return Math.min(Math.max(num, min), max);
}
function refreshWhite(change) {
    var _a, _b, _c;
    happiness = checkValue((fun + energy + strength + full) / 4);
    refreshBarAndNum("happiness", happiness);
    refreshBarAndNum("fun", fun);
    refreshBarAndNum("energy", energy);
    refreshBarAndNum("strength", strength);
    refreshBarAndNum("full", full);
    if (!change) {
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
    updateHearts();
}
function updateHearts() {
    const heartsElement = document.getElementById("hearts");
    if (heartsElement) {
        const heartCount = Math.round(happiness / 20);
        heartsElement.innerText = "♥".repeat(heartCount);
    }
}
function refreshBarAndNum(id, num) {
    num = checkValue(num);
    let barId = id + "Bar";
    let numId = id + "Num";
    let barValue = num.toString() + "%";
    const barElement = document.getElementById(barId);
    if (barElement) {
        barElement.style.width = barValue;
        if (num <= 50) {
            barElement.style.backgroundColor = "orange";
        }
        if (num <= 20) {
            barElement.style.backgroundColor = "red";
        }
        if (num > 50) {
            barElement.style.backgroundColor = "green";
        }
    }
    const element = document.getElementById(numId);
    if (element) {
        element.innerText = barValue + " " + id;
    }
}
function eatIceCream() {
    var _a;
    full = checkValue(full + 10);
    energy = checkValue(energy - 0);
    fun = checkValue(fun + 5);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyEat.png");
    refreshWhite(true);
}
function eatCarrot() {
    var _a;
    full = checkValue(full + 20);
    energy = checkValue(energy - 5);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyEat.png");
    refreshWhite(true);
}
function eatMeat() {
    var _a;
    full = checkValue(full + 30);
    energy = checkValue(energy - 10);
    strength = checkValue(strength + 5);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyEat.png");
    refreshWhite(true);
}
function playPs5() {
    var _a;
    full = checkValue(full - 10);
    energy = checkValue(energy - 10);
    strength = checkValue(strength - 10);
    fun = checkValue(fun + 30);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyPlaying.png");
    refreshWhite(true);
}
function playBall() {
    var _a;
    full = checkValue(full - 20);
    energy = checkValue(energy - 30);
    strength = checkValue(strength + 5);
    fun = checkValue(fun + 10);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyPlaying.png");
    refreshWhite(true);
}
function playGambling() {
    var _a;
    full = checkValue(full - 5);
    energy = checkValue(energy - 10);
    strength = checkValue(strength - 5);
    if (Math.random() < 0.5) {
        fun = checkValue(fun + 50);
    }
    else {
        fun = checkValue(fun - 50);
    }
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyPlaying.png");
    refreshWhite(true);
}
function fightBox() {
    var _a;
    full = checkValue(full - 20);
    energy = checkValue(energy - 20);
    strength = checkValue(strength + 20);
    fun = checkValue(fun + 10);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyFight.png");
    refreshWhite(true);
}
function fightRun() {
    var _a;
    full = checkValue(full - 20);
    energy = checkValue(energy - 30);
    strength = checkValue(strength + 45);
    fun = checkValue(fun - 10);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyFight.png");
    refreshWhite(true);
}
function fightKick() {
    var _a;
    full = checkValue(full - 15);
    energy = checkValue(energy - 20);
    strength = checkValue(strength + 15);
    fun = checkValue(fun + 5);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnyFight.png");
    refreshWhite(true);
}
function sleepBed() {
    var _a;
    full = checkValue(full - 5);
    energy = checkValue(energy + 20);
    strength = checkValue(strength - 5);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnySleep.png");
    refreshWhite(true);
}
function sleepGamba() {
    var _a;
    full = checkValue(full - 40);
    energy = checkValue(energy + 30);
    strength = checkValue(strength - 20);
    fun = checkValue(fun + 5);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnySleep.png");
    refreshWhite(true);
}
function sleepNight() {
    var _a;
    full = checkValue(full - 50);
    energy = checkValue(energy + 70);
    (_a = document.getElementById("mrWhiteImg")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "./bunnySleep.png");
    refreshWhite(true);
}
setInterval(() => {
    timeMoving();
}, 10000);
