console.log("Exercise Every----------------");


const ticket01 = ['☕', '☕', '☕', '☕'];
const ticket02 = ['☕', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];


console.log(ticket01.every(food => food == '☕'));

console.log(ticket02.every(food => food == '☕'));

console.log("Exercise Slice----------------");

const ticket03 = ['🍹', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];

function findPos(item) {
    return ticket03.indexOf(item);
}

function addItems(item1,item2, array){
    //array.push(ticket03[findPos(item1)]);
    //delete ticket03[findPos(item1)];
    //array.push(ticket03[findPos(item2)]);
    //delete ticket03[findPos(item2)];
    array.push(ticket03.slice(ticket03.indexOf(item1),ticket03.indexOf(item1)+1));
    array.push(ticket03.slice(ticket03.indexOf(item2),ticket03.indexOf(item2)+1));
    console.log(array);
}

function sliceTicket() {
    let person01 = [];
    let person02 = [];
    let person03 = [];


    addItems('☕', '🥐', person01);
    addItems('🍵', '🥖', person02);
    addItems('🍹', '🥪', person03);
    
    let newTicket = ticket03[findPos('🥯')];
    console.log("Remaining items in the original ticket: " + newTicket);
}

const person1Consumption = ['☕', '🥐'];
const person2Consumption = ['🍵', '🥖'];
const person3Consumption = ['🍹', '🥪'];

function spliceTicket() {
    let person01 = createIndividualTicket(ticket03, person1Consumption);
    let person02 = createIndividualTicket(ticket03, person2Consumption);
    let person03 = createIndividualTicket(ticket03, person3Consumption);

    console.log('Person 1 Ticket:', person01);
    console.log('Person 2 Ticket:', person02);
    console.log('Person 3 Ticket:', person03);

}

const createIndividualTicket = (ticket, consumption) => {
    const individualTicket = [];
    for (const item of consumption) {
      const index = ticket.indexOf(item);
      if (index !== -1) {
        individualTicket.push(ticket.splice(index, 1)[0]);
      }
    }
    return individualTicket;
  };

sliceTicket();

spliceTicket();
