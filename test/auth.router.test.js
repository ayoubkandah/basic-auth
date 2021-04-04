const oauth =require("../src/auth/middleware/oauth")
const superGoose=require("@code-fellows/supergoose")
const {server}= require("../src/server")
const request=superGoose(server)
const bcrypt=require('bcrypt')
const base64=require('base-64')
const authorize=require("authorization-header")
var basic = require('basic-authorization-header');

const obj={username:"ayoub",password:"123"}

describe("Testing Author",()=>{
it("saving data",async ()=>{
    const response=await request.post("/signup").send(
        obj
    )

    expect(response.body.username).toEqual(obj.username)
const bool=await bcrypt.compare(obj.password,response.body.password)
    expect(bool).toEqual(true)
    expect(response.status).toEqual(200)
})

it("signin Test",async ()=>{
   
const response= await request.post("/signin").set(
    "Authorization", "Basic " + new Buffer(obj.username + ":" + obj.password, "utf8").toString("base64")
    )
    
  
console.log( response,"----------------");
expect(response.body.username).toEqual(obj.username)
let bool=await bcrypt.compare(obj.password,response.body.password)
expect(bool).toEqual(true)
expect(response.status).toEqual(200)
})

})