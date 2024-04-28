const importFile = require('./functions.js');
var fs = require('fs');
var os = require('os'); 

var user = os.userInfo();
console.log(user);

 fs.appendFile("Greeting.txt","Hii " + user.username + '\n' , ()=>{
    console.log("file is created");
 })