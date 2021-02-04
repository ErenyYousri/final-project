const express=require('express')
const flightsModel = require('../models/flights')
const router = new express.Router()

  
router.post('/flights/add',async(req,res)=>{
    flightsData = new flightsModel({
        ...req.body,
        
    })
    try{
        await flightsData.save()
        res.send({
            status:1,
            message:'added', 
            data: flightsData
        })
    }
    catch(e){
        res.send({
            status:0,
            message:'error adding',
            data:e
        })
    }
})


router.get('/flights/showAll', async(req,res)=>{
    try{
        console.log('inside route')
         alldata = await flightsModel.find({})
            res.send({
                status:1,
                message: 'all data retriverd',
                data: alldata
            })
    }
    catch(e){const auth = require('../middleware/authorization')
console.log(err)
        res.send({
            status:0,
            message: 'data retreving error',
            data: e
        })
    }
})




module.exports = router