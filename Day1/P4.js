var prompt = require('prompt-sync')();
const name = prompt("Please enter Your name: ");
const guestList = ['Manish','Lalit','Bindiya','Rajendri','Dharmendra'];

if(guestList.includes(name)){
    console.log("Welcome to the party, [" + name+"]!" );
}else{
    console.log("Sorry, you're not on the guest list.");
}