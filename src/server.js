'use strict'
const express=require('express')
const morgan=require("morgan")
const authRouter=require("./auth/router")
const serverError=require("./middleware/500")
const notFound=require("./middleware/404")
const app=express()

app.use(express.json())
app.use("/",authRouter)
// app.use(serverError)
// app.use("*",notFound)

app.use(morgan('dev'))

module.exports={
server:app,
start:(port)=>{

    const PORT=port||3030;
    app.listen(PORT,()=>{
return console.log(`-----${PORT}-----`);

    })
}

}