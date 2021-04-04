'use strict'
const mongoose=require('mongoose')

const accountsSchema=new mongoose.Schema({
username: {type:String,required: true},
password: {type: String,required: true},
})
const Ac=mongoose.model("accounts",accountsSchema)

module.exports=Ac
