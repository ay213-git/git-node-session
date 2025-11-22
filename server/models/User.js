const mongoose=require('mongoose')
const { schema } = require('./Jewel')
const userSchema =new mongoose.Schema({
userName:{
    type:String,
    require:true,
    unique:true
},
fullName:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true,
    lowercase:true,
    trim:true
},
phone:{
    type:String,
    
},
password:{
    type:String,
    require:true
},
roles:{
    type:String,
    enum:["User","Admin"], 
    default:"User"
},
active:{
    type:Boolean,
    default:true
}



},{timestamps:true})
module.exports=mongoose.model("User",userSchema)