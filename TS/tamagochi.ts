let happiness: number = 50;
let fun: number = 50;
let energy: number = 50;
let strength: number = 50;
let full: number = 50;

function timeMoving(): void {
    fun -= 20;
    strength-= 10;
    full -= 10;
    refreshWhite();
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

setInterval(() => {
    timeMoving();
}, 10000);