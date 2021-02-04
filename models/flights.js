const mongoose = require('mongoose')
const validator = require('validator')
const flightsSchema = new mongoose.Schema({

    name:
    {
        type:String,
        required: true,
    },
     date:{type:Date},
     price:{type:Number},
   

    

})
const flights = mongoose.model("Flights",flightsSchema)
module.exports = flights