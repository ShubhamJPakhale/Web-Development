const mongoose=require("mongoose");

const Clientschema=new  mongoose.Schema({
    name:{type:String},
    company:{type:String},
})

const client=mongoose.model("Client",Clientschema);

module.exports=client;