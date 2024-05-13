// const jsonString = '{"name":"Manish","age":"25","City":"Noida"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.age);


const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


const personRouter = require('./routes/personRoutes');
app.use('/person',personRouter);

const menuRouter = require('./routes/menuRoutes');
app.use('/menu',menuRouter);

app.get('/', function (req, res) {
  res.send('What movie you see today?')
})

// app.get('/man',(req, res)=>{
//     var list = {
//         name : 'I am Legend',
//         actor: 'Will Smith',
//         is_english: false,
//         is_HD:true
//     }
//     res.send(list.name)
// })

// app.get('/weather',(req, res)=>{
//     var list = {
//         temp: 48,
//         conditions:"very hottt",
//         city: "noida"
//     }
//     res.send(list);
// })



//get method to get the person data 


// Commented by mohit



app.listen(3000, ()=>{
    console.log("server is live....")
})
