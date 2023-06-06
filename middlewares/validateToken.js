const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error('User is not autorized')
            }
            req.user = decoded.user;
            next();
            })
            if(!token) {
                req.status(401);
                throw new Error('User is not autorized or token is missin')
            }
        }
    })

module.exports = validateToken;