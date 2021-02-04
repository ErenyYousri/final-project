const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const bookingModels = require('./booking')
const UserSchema = new mongoose.Schema({

    name:{
        type: String,
         required:true,
         trim:true,
         minLength: 2,
         maxLength: 50

    },
    age:{
        type:Number, 
        default:15,
        validate(value){
            if(value<15) throw new Error('invalid value')
        }
    },

    email:{        
        type: String,
         required:true,
         trim:true,
         unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },

    password:{
        type: String,
         required:true,
         trim:true,
         minLength:6, 
         maxLength:100
    },

    tokens:[{
        token:{
            type:String
        }
    }]
})

UserSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.tokens
    delete user._id
    delete user.__v
    return user
}

 UserSchema.virtual('booking',{
ref:'Booking',
localField:"_id",
 foreignField:'custom'

})

UserSchema.pre('save', async function(next){
    const userData = this
    if(userData.isModified('password')){
        userData.password = await bcrypt.hash(userData.password, 15)
    }
    next()
})



UserSchema.statics.findLogin = async (email, password) =>{
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')
    flag = await bcrypt.compare(password, user.password)
    if(!flag) throw new Error('invalid pass')
    return user
}

UserSchema.methods.generateToken = async function(){
    const user=this
    const token = jwt.sign( { _id:user._id.toString() } , 'hello')    
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User = mongoose.model('User', UserSchema)
module.exports = User

