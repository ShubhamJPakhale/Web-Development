const modeldata=require("./model");
const express=require("express");
const client = require("./model");

const app=express();
app.use(express.json());

//get data from db
app.get("/client",async (req,res)=>{
    const clientdata= await modeldata.find({});
    try{
        res.status(200).send(clientdata);
    }
    catch(err){
        console.log("error is "+err);
    }
})

//Insert data to db 
app.post("/client",async (req,res)=>{
    const clientdata= new modeldata(req.body);

    try{
        await clientdata.save();
        res.send(clientdata);
    }
    catch(err)
    {
        console.log("error is "+err);
    }
})

//update data of db
app.put("/client/:id",async(req,res)=>
{
    try{
        await modeldata.findByIdAndUpdate(req.params.id,req.body);
        //await clientdata.save();
    }
    catch(err)
    {
        console.log("error is "+err);
    }
})

//delete specific entry from db
app.delete("/client/:id",async(req,res)=>{
    try{
        clientdata=await modeldata.findByIdAndDelete(req.params.id);

        if(!clientdata)
        {
            res.status(404).send("There is no client");
        }
    }
    catch(err)
    {
        console.log("error is "+err);
    }
})

module.exports=app;