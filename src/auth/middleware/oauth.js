const bcrypt=require('bcrypt')
const base64=require('base-64')
const Ac=require("../models/users-model")
module.exports=async (req,res,next)=>{
    const encode=req.headers.authorization.split(" ")[1];
    // console.log(encode,"")
    const decoded=base64.decode(encode)
    // console.log(decode)
    const [username,password]=decoded.split(":")
    try{
        const usernameCheck= await Ac.findOne({username})
        // console.log(usernameCheck);
    if(usernameCheck){
     const paswordCheck= await bcrypt.compare(password,usernameCheck.password)
     if(paswordCheck){
         data=await usernameCheck
        //  console.log(data)
        res.json(data)
        // next()
     }else{
         res.status(401).json({error:`Invalid Pssword for username : ${username}}`})
         next("Password")   
    
        }
    
     }else{
        res.status(401).json({error:`Wrong  UserName`})  
        next("user Name")   
     }
    }
    
     catch(err){
        next(err)
    }
    }
 
 
