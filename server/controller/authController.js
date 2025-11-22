const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")

const login = async (req, res)=>{
    const {userName, password} = req.body
    if(!userName || !password){
        return res.status(400).send("userName or password is required")
    }
    const foundUser= await User.findOne({userName}).lean()
    if(!foundUser || !foundUser.active){
        return res.status(401).send("Unauthorized")
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if(!match){
        return res.status(401).send("Unauthorized")
    }
    const userInfo = {_id:foundUser._id, name:foundUser.name, roles:foundUser.roles, 
    userName:foundUser.userName, email: foundUser.email}   
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET )
    
    res.json({token:accessToken})
}

const register = async(req, res)=>{
   
    const {userName,fullName,email,phone,password,roles}=req.body
    if(!userName||!fullName||!email||!password ){
        return res.status(400).json({message: 'All field are required'})
    }
    const duplicate = await User.findOne({userName}).lean()
    if(duplicate){
        return res.status(409).send("duplicate userName")
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject = {fullName, email, userName, phone,roles, password:hashedPwd }
    console.log("roles",roles);

    const user = await User.create(userObject)
    if(!user){
        return res.status(400).send("no user")
    }
    res.json(user)
}

module.exports = {
    login, 
    register
}

