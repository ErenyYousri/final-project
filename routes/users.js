const express=require('express')
const userModel = require('../models/users')
const router = new express.Router()
const auth = require('../middleware/authorization')

router.post('/user/add', async (req,res) => {
    const user = new userModel(req.body)
    try{
        await user.save()
        const token = await user.generateToken()
        res.send({
            status: 1,
            message:'data inserted successfuly',
            data: {user, token}
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'error',
            data: e
        })
    }
})


router.get('/user/showAll', async(req,res)=>{
    try{
        console.log('inside route')
         alldata = await userModel.find({})
            res.send({
                status:1,
                message: 'all data retriverd',
                data: alldata
            })
    }
    catch(e){const auth = require('../middleware/authorization')

        res.send({
            status:0,
            message: 'data retreving error',
            data: e
        })
    }
})


router.post('/user/login', async(req, res)=>{
//const user = usermodel (req.body)
    try{
        const user = await userModel.findLogin(req.body.email, req.body.password)
        console.log(user)
        const token = await user.generateToken()
        res.send({
            status:1,
            message: 'user founded',
            data: {user, token}
        })
    }
    catch(e){
        res.send({
            status: 0,
            message:'invalid login',
            data:e
        })
    }
})


router.post('/user/logout',auth, async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((singletoken)=>{
            return singletoken.token !== req.token
        })
        await req.user.save()
        res.send({
            status:1,
            message:"logged out"
        })
    }
    catch(e){
        res.send({
            status:0,
            message:"cann't logout"
        })
    }
})


module.exports = router
