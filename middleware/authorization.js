const jwt = require('jsonwebtoken')
const User = require ('../models/users')
const auth = async (req,res,next)=>{
    console.log('inside middleware')


try{

const token = req.header('authorization').replace('Bearer ','')
console.log(token) 

const decodedToken = jwt.verify(token , "hello")
console.log(decodedToken)

const user = await User.findOne({_id:decodedToken._id})
console.log(user)

if(!user){ throw new Error() }
req.user = user
req.token = token
next()
}

catch(e){
    res.send({
        data:e,
        message:"please authintcate",
        statue:0
    })
}
}
module.exports = auth
