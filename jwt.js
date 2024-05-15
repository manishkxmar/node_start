const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) =>{

    // first check request header has authorized or not
    const authorized = req.headers.authorization;
    if(!authorized) return res.status(401).json({ error: 'Token not found'});


    // Extract the jwt token from the request headers
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Unauthorized'});

    try{
        // Verify the jwt token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded
        next();
    }catch(err){
        console.error(err);
        res.status(401).json({ error: 'Invalid token'});
    }
}
    // Function to generate JWT token
const generateToken = (userData)=>{
    // Generate a new JWT token using user data
    return jwt.sign(userData, process.env.JWT_SECRET);

}

module.exports = {jwtAuthMiddleware,generateToken }