const mongoose=require("mongoose")
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_URI)
    }
    catch(err){
        console.log("error connection to db"+err);
    }
}
module.exports = connectDB