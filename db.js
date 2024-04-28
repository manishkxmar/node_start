const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/manish' //node is your databse name

// set up mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', ()=>{
    console.log("Connected to MongoDB server");
});
db.on('error', (err) => {
    console.log('MongoDB connection error:',err);
});
db.on('disconnected', () => {
    console.log("MongoDB Disconnected");
});

//Export the database connection

module.exports = db;