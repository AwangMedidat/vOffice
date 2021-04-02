const jwt = require('jsonwebtoken')

function generateToken(payloads){
    return jwt.sign(payloads,process.env.JWT_SECRET)
}

function verifyToken(token){
    return jwt.verify(token,process.env.JWT_SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}