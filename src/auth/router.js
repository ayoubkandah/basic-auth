'use strict'
const express= require("express")
const auth=require("../middleware/model-finder")
const bcrypt=require('bcrypt')
const base64=require('base-64')
const Ac=require("../auth/models/users-model")
const oAuth=require("./middleware/oauth")
const router=express.Router()
router.post("/signup",savingData)
router.post("/signin",oAuth)


async function savingData(req,res,next){  
try{
const {username,password}=req.body;
// console.log(password,"------")
const hash=await bcrypt.hash(password,5)
// console.log(hash,"------")
const newAc=new Ac({username,password: hash})
const record=await newAc.save()
res.json(record)
} catch(err){
    next(err)
}
}





module.exports=router