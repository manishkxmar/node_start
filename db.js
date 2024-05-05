const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/manish' //node is your databse name
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

// set up mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true
    // sslValidate: true
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