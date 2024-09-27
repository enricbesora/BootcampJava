let array = [];

const RANDOM = ['⛅','🌚','🌞','🌬','🛬','🧟‍♂️','🤯','🐱‍🚀','🐱‍🏍','🐱‍🐉','🤡'];

function refreshArray() {
    document.getElementById("array").innerHTML = "<b>[</b>" + array + "<b>]</b>";
}
function getRandom() {
    return (Math.floor(Math.random() * RANDOM.length));
}

//Add
function pushArray() {
    array.push(RANDOM[getRandom()]);
    refreshArray();
}

function unshiftArray() {
    array.unshift(RANDOM[getRandom()]);
    refreshArray();
}

function insertAtArray() {
    let pos = document.getElementById("insertNum").value;
    if(pos > -1){
        array.splice(pos,0,RANDOM[getRandom()]);
    } else
        alert("La posicion debe ser positiva!😡");
    refreshArray();
}

//Remove
function popArray() {
    array.pop();
    refreshArray();
}

function shiftArray() {
    array.shift();
    refreshArray();
}

function removeAtArray() {
    let pos = document.getElementById("removeNum").value;
    if(pos > -1){
        array.splice(pos,1);
    } else
        alert("La posicion debe ser positiva!😡");
    refreshArray();
}

document.getElementById("push").onclick = function() {pushArray()};
document.getElementById("unshift").onclick = function() {unshiftArray()};
document.getElementById("insertAt").onclick = function() {insertAtArray()};

document.getElementById("pop").onclick = function() {popArray()};
document.getElementById("shift").onclick = function() {shiftArray()};
document.getElementById("removeAt").onclick = function() {removeAtArray()};

