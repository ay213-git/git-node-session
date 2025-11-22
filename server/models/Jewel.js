const mongoose=require('mongoose')
const jewelSchema=new mongoose.Schema({
jeweName:{
    type:String,
    require:true,
    unique:true
},
grossWt:{
    type:Number,
    require:true
},
gold:{
    type:Number,
    require:true,
    
},
cvd:{
    type:Number,
    require:true,
    min:0,
    max:10
},
type:{
    type:String,
    enum:["ring","bracelet","chain","earring"],
    require:true,
    min:0,
    max:10 
},
img:{
    type:String,
    default:"http://localhost:2222/1.JPG"
},
price:{
    type:Number,
    }


},{timestamps:true})
module.exports=mongoose.model("Jewel",jewelSchema)