require("dotenv").config()
const express=require("express")
const cors=require("cors")
const configOption=require("./config/corsOptions")
const connectDB=require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const PORT=process.env.PORT||3333
const app=express()
connectDB()
app.use(cors(configOption))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/auth",require("./routes/authRouter"))
app.use("/api/jewel",require("./routes/jewelRouter"))
app.use("/api/basket",require("./routes/basketRouter"))
app.get("/",(req,res)=>{
res.send("hello world")
})
mongoose.connection.once('open',()=>{
    console.log("connected to DB");
    app.listen(PORT,()=>{
        console.log(`server run on port ${PORT}`);
    })
})
mongoose.connection.on('error',err=>{
    console.log("err");

})
