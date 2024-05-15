const person = require('./models/person');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(async (USERNAME, password, done) =>{
  // authentication logic here
  try{
    console.log('Received Credentials:', USERNAME, password);
    const user = await person.findOne({username: USERNAME});
    console.log(user);
    if(!user)
      return done(null, false, { message: 'Incorrect Username.' });

    const isPasswordMatch =await user.comparePassword(password);
    if(isPasswordMatch){
      return done(null, user);
    }else{
      return done(null, false, {message: 'Incorrect Password.' });
    }
  }
  catch(err){
    return done(err);
  }
}))

module.exports = passport;