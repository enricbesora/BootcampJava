const ticket01 = ['🍺', '🍺', '🥜']; 
const ticket02 = ['🍺', '🥪', '🥙']; 

const combinedTicket = []; 


function concatMethod() {
    const ticket01 = ['🍺', '🍺', '🥜']; 
    const ticket02 = ['🍺', '🥪', '🥙']; 

    const combinedTicket = ticket01.concat(ticket02);

    console.log(combinedTicket);
    
}

function spreadMethod() {
    const ticket01 = ['🍺', '🍺', '🥜']; 
    const ticket02 = ['🍺', '🥪', '🥙']; 

    const combinedTicket = [...ticket01, ...ticket02];

    console.log(combinedTicket);
}

function pushMethod() {
    const ticket01 = ['🍺', '🍺', '🥜']; 
    const ticket02 = ['🍺', '🥪', '🥙']; 

    const combinedTicket= [];


    combinedTicket.push.apply(combinedTicket,ticket01);
    combinedTicket.push.apply(combinedTicket,ticket02);


    console.log(combinedTicket);
}

function forMethod() {
    const ticket01 = ['🍺', '🍺', '🥜']; 
    const ticket02 = ['🍺', '🥪', '🥙']; 

    const combinedTicket= [];
    for (let i = 0; i < ticket01.length + ticket02.length; i++) {
        if (i < ticket01.length){
            combinedTicket[i] = ticket01[i];
        }
        else {
            combinedTicket[i] = ticket02[i - ticket01.length];
        }
    }
    console.log(combinedTicket);
}

function forEachMethod() {
    const ticket01 = ['🍺', '🍺', '🥜']; 
    const ticket02 = ['🍺', '🥪', '🥙']; 

    const combinedTicket= [];
    ticket01.forEach(element => {
        combinedTicket.push(element);
    });
    ticket02.forEach(element => {
        combinedTicket.push(element);
    });
    
    console.log(combinedTicket);
}

console.log('Method concat-----------');
concatMethod();

console.log('Method spread-----------');
spreadMethod();

console.log('Method push-----------');
pushMethod();

console.log('Method for-----------');
forMethod();

console.log('Method forEach-----------');
forEachMethod();

