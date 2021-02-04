const mongoose = require('mongoose')
const validator = require('validator')
const Booking = mongoose.model('Booking',{
    custom:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
  firstname:{
        type: String,
        required: true,
        trim: true
    },

 lastname:{
        type: String,
        required: true,
        trim: true
    },
    Country:{
      type:String,
     
    },

    gender:{
        type:String,
         required:true
      },

Date_of_flight:{
        type:Number,
         
      },
})
module.exports = Booking


