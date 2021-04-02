const { verifyToken } = require('../helpers/jwt')

const authencicate = function(req,res,next){
    try{
        const token = req.headers.access_token
        const decoded = verifyToken(token)
        // console.log(decoded, 'ini dari auth')
        req.decoded = decoded
        next()
    }catch{
        next({name: "TokenInvalid",status: 400,
        message: 'token invalid'})
    }
}

module.exports = authencicate