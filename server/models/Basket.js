const mongoose=require("mongoose");
const basketSchema=new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
    },
products:[
{    
    jewel:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Jewel"
    },
    quantity:{
    type:Number,
    default:1
    }
}
]

},
{timestamps:true})
module.exports=mongoose.model("Basket",basketSchema)