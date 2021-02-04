
const express=require('express')
const BookingModel = require('../models/booking')
auth= require('../middleware/authorization')
const router = new express.Router()

router.post('/booking/add',auth, async(req,res)=>{
    bookingData = new BookingModel({
        ...req.body,
        custom: req.user._id
    })
    console.log(bookingData,'1')
    try{
        await bookingData.save()
        console.log(2)
        res.send({
            status:1,
            message:'added', 
            data: bookingData
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

router.get('/booking/me', auth,async(req,res)=>{
   
    try{
        await req.user.populate('booking').execPopulate()
        res.send(req.user.booking)
    }
    catch(e){res.send({status:0, dest:e})}

})

router.post('/booking/mybooking/:id',auth, async(req,res)=>{
    const _id = req.params.id
    try{
        const booking = await bookingModel.find({_id, custom:req.user._id})
        if(!booking) res.send('booking not found')
        else res.send(booking)
    }
    catch(e){
        res.send({
            status:0,
            data:e
        })
    }
})
 
router.patch('/booking/:id',auth, async(req,res)=>{
    avl = ['name','dest']
    requpdates = Object.keys(req.body)
    isAvl = requpdates.every((update)=>avl.includes(update))
    if(!isAvl) res.send('not available')
    try{
        const booking = await bookingModel.findOne({_id:req.params.id, custom: req.user._id})
        if(!booking) res.send('not found')
        requpdates.forEach(el =>{
            booking[el] = req.body[el]
        })
        await booking.save()
        res.send('updated')
    }
    catch(e){
        res.send(e)
    }
})
module.exports = router