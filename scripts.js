
 //Arrays 
 const flavors = [ 
    {name: "vanilla", portion: 3},
    {name: "strawberry", portion: 1},
    {name: "coffee", portion: 2}
 ]

//this is a procedure I want JavaScript to do to print out flavors
function printIceCreamAvailability(flava){
    console.log(flava);
    console.log(
        `Welcome to Froyo, where we have the most famous ${flava.name}
        ice cream.`)
    };
    
//This function uses the data above the formula to present the user information. 
flavors.forEach(flava => printIceCreamAvailability(flava));
    
//This code is the front end and helps users track orders

let hasChosenCorrectly = false;

while (!hasChosenCorrectly){
const userChoice = prompt(
    "Welcome to Froyo! What orders would you like to see?");
    const selectedFlavor = flavors.find(flava => flava.name === userChoice);

if (selectedFlavor) {
    alert(`${selectedFlavor.name} - Portion: ${selectedFlavor.portion}`);
    hasChosenCorrectly = true;
} else {
    alert("Please enter one of the flavors to know your order");
}   
}

