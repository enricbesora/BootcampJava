"use strict";
let happiness = 50;
let fun = 50;
let energy = 50;
let strength = 50;
let full = 50;
function timeMoving() {
    fun -= 20;
    strength -= 10;
    full -= 10;
    refreshWhite();
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
setInterval(() => {
    timeMoving();
}, 10000);
