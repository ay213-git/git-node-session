import { useEffect, useState } from "react"
import {useRegisterFuncMutation}from "./authApiSlice"
import { useNavigate} from "react-router-dom"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { FloatLabel } from "primereact/floatlabel";


const Register=()=>{
    const navigate=useNavigate()

const [register,{isError,isSuccess,error,isLoading}]= useRegisterFuncMutation();
const [formData,setFormData]=useState({
    userName:"",
    fullName:"",
    password:"",
    phone:"",
    email:"",
    roles:"User",
    active:true
    
})
useEffect(()=>{
    if(isSuccess){
        navigate("/login")
    }
},[isSuccess])
const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
}
const handleSubmit=(e)=>{
 e.preventDefault()
 register(formData)
}

   return(
    <div>
        <h1>register</h1>
        {isError&&  <Message severity="error" text={JSON.stringify(error.data)} />}
        
        {/* {isError&&JSON.stringify(error.data)} */}
    <form  style={{display:"flex",flexDirection:"column",marginLeft:"32.5vw"}}onSubmit={handleSubmit}>




   
        <div  style={{width:"50%"}}className="card flex justify-content-center">
            <div className="userName">
            <FloatLabel>
                <InputText  type="text" name="userName"  id="userName"  className="p-inputtext-lg"  placeholder="Enter your user name" onChange={handleChange} required/>
                <label htmlFor="username">Username</label>
            </FloatLabel>
            </div>
            
        </div>
                <div style={{width:"50%"}} className="card flex justify-content-center">
                    <div className="fullName">
            <FloatLabel>
                <InputText type="text" name="fullName"  id="fullName"  className="p-inputtext-lg"  placeholder="Enter your fullName"   onChange={handleChange} required />
                <label htmlFor="fullName">FullName</label>
            </FloatLabel>
             </div>

                </div>
    <div style={{width:"50%"}} className="card flex justify-content-center">
                    <div className="pasword">
            <FloatLabel>
                <InputText type="password" name="password"  id="password"  className="p-inputtext-lg"  placeholder="Enter your password"   onChange={handleChange} required />
                <label htmlFor="password">Password</label>
            </FloatLabel>
             </div>
<div></div>
             </div>
              <div style={{width:"50%"}} className="card flex justify-content-center">
              <FloatLabel>
                <InputText type="text" name="email"  id="email"  className="p-inputtext-lg"  placeholder="Enter your phone"   onChange={handleChange} required />
                <label htmlFor="email">Email</label>
            </FloatLabel>

             </div>
              <div style={{width:"50%"}} className="card flex justify-content-center">
                    <div className="phone">
            <FloatLabel>
                <InputText type="text" name="phone"  id="phone"  className="p-inputtext-lg"  placeholder="Enter your phone"   onChange={handleChange} required />
                <label htmlFor="phone">Phone</label>
            </FloatLabel>
             </div>

             </div>

            <div className="submit">
            <Button  style={{marginRight:"50%"}} type="submit" severity="secondary"  label="Register" />
            </div>
            
           
    </form>
    </div>)
}
export default Register