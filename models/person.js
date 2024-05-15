const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Define the person schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String,
        // required:true
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

personSchema.pre('save', async function(next){
    const person = this;

    if(!person.isModified('password')) return next();
   
    try{
        //  hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        // override the plain password with the hashed one
        person.password = hashedPassword;
        
        next();
    }
    catch(err){

    }
})

// personSchema.methods.comparePassword = async function(candidatePassword){
//     try{
//         const isMatch = await bcrypt.compare(candidatePassword, this.password);
//         return isMatch;
//     }
//     catch(err){
//         throw err;
//     }
// }

personSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        // Instead of re-throwing the error, you might want to handle it or log it
        console.error("Error comparing passwords:", error);
        return false; // Return false to indicate that the comparison failed
    }
}

// create person model
const person = mongoose.model('person',personSchema);
module.exports = person;