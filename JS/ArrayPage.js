let array = [];

const RANDOM = ['⛅','🌚','🌞','🌬','🛬','🧟‍♂️','🤯','🐱‍🚀','🐱‍🏍','🐱‍🐉','🤡'];

function refreshArray() {
    const arrayContainer = document.getElementById("array");
    arrayContainer.innerHTML = "";  // Limpiar el contenedor
    
    array.forEach((item, index) => {
        let span = document.createElement('span');
        span.classList.add('array-item');
        span.textContent = item;
        
        // Agregar animación de entrada
        setTimeout(() => {
            span.classList.add('show');
        }, 50);
        
        arrayContainer.appendChild(span);
    });
}

function getRandom() {
    return (Math.floor(Math.random() * RANDOM.length));
}

// Add
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
    } else {
        alert("La posicion debe ser positiva!😡");
    }
    refreshArray();
}

// Remove
function popArray() {
    if(array.length > 0) {
        const lastItem = document.querySelector("#array span:last-child");
        if (lastItem) {
            lastItem.classList.add('remove');  // Aplicar animación de salida
            setTimeout(() => {
                array.pop();
                refreshArray();
            }, 500);  // Eliminar el elemento después de la animación
        }
    }
}

function shiftArray() {
    if(array.length > 0) {
        const firstItem = document.querySelector("#array span:first-child");
        if (firstItem) {
            firstItem.classList.add('remove');  // Aplicar animación de salida
            setTimeout(() => {
                array.shift();
                refreshArray();
            }, 500);  // Eliminar el elemento después de la animación
        }
    }
}

function removeAtArray() {
    let pos = document.getElementById("removeNum").value;
    if(pos > -1 && pos < array.length){
        const itemToRemove = document.querySelector(`#array span:nth-child(${pos})`);
        if (itemToRemove) {
            itemToRemove.classList.add('remove');
            setTimeout(() => {
                array.splice(pos, 1);
                refreshArray();
            }, 500);  
        }
    } else {
        alert("La posicion debe ser válida!😡");
    }
}

document.getElementById("push").onclick = function() {pushArray()};
document.getElementById("unshift").onclick = function() {unshiftArray()};
document.getElementById("insertAt").onclick = function() {insertAtArray()};

document.getElementById("pop").onclick = function() {popArray()};
document.getElementById("shift").onclick = function() {shiftArray()};
document.getElementById("removeAt").onclick = function() {removeAtArray()};
