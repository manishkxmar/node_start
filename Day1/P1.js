var prompt = require('prompt-sync')();
const age = prompt("Please enter your age here:");
if(age<18){
    console.log("You get a 20% discount!");
}else if (age >=18 && age < 65 ) {
    console.log("Normal ticket price applies.");
}else {
    console.log("You get a 30% senior discount!");
}
