import { useEffect, useState } from "react";
import {useLoginMutation}from "./authApiSlice"
import { useNavigate } from "react-router-dom"; 
import {useDispatch}from "react-redux"
import { setToken } from "./authSlice";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { FloatLabel } from "primereact/floatlabel";


  

 const Login = () => {
 const [login,{isError,isSuccess,error,data}] =useLoginMutation();


const navigate=useNavigate()
const dispatch=useDispatch()
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        PasswordVerifY: "",
    });
 useEffect(()=>{
    if(isSuccess){
        console.log(data);
        dispatch(setToken(data))
        navigate("/")
    }

 },[isSuccess]) 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password===formData.PasswordVerifY){
            login(formData)
        }
        else{
        return (
     
            alert("Passwords do not match")
        )
}
       

    }
    return (
        <div>
             
            <h1>login</h1>
            {isError&&  <Message severity="error" text={JSON.stringify(error.data)} />}
           
        <form style={{display:"flex",flexDirection:"column",marginLeft:"32.5vw"}} onSubmit={handleSubmit}>
         <div  style={{width:"50%"}}className="card flex justify-content-center">
            <div className="userName">
            <FloatLabel>
                <InputText  type="text" name="userName"  id="userName"  className="p-inputtext-lg"  placeholder="Enter your user name" onChange={handleChange} required/>
                <label htmlFor="username">Username</label>
            </FloatLabel>
            </div></div>
            <div  style={{width:"50%"}}className="card flex justify-content-center">
            <div className="password">
            <FloatLabel>
                <InputText  type="password" name="password"  id="password"  className="p-inputtext-lg"  placeholder="Enter your password" onChange={handleChange} required/>
                <label htmlFor="password">password</label>
            </FloatLabel>
            </div>
            </div>
             <div  style={{width:"50%"}}className="card flex justify-content-center">
            <div className="PasswordVerifY">
            <FloatLabel>
                <InputText  type="password" name="PasswordVerifY"  id="PasswordVerifY"  className="p-inputtext-lg"  placeholder="Verify your password" onChange={handleChange} required/>
                <label htmlFor="PasswordVerifY">PasswordVerifY</label>
            </FloatLabel>
            </div>
            
        </div>
            <Button  style={{marginRight:"50rem",width:"5rem",right:"-20%"}} type="submit" severity="secondary"  label="Login" />
</form>
</div>
    );
};

export default Login;
 




//     

            // <div className="userName">
            // {/* <label >PasswordVerifY</label> */}
            // <InputText type="text" name="userName"  id="userName"  className="p-inputtext-lg"  placeholder="Enter your username"   onChange={handleChange} required />
            // </div>
            
            // <div className="password">
            // {/* <label >PasswordVerifY</label> */}
            // <InputText type="password" name="password"  id="password"  className="p-inputtext-lg"  placeholder="Enter your password"   onChange={handleChange} required />
            // </div>
            
            
            // <div className="PasswordVerifY">
            // {/* <label >PasswordVerifY</label> */}
            // <InputText type="password" name="PasswordVerifY"  id="PasswordVerifY"  className="p-inputtext-lg"  placeholder="Verify your password"   onChange={handleChange} required />
            // </div>
            // <div className="submit">
            // <Button type="submit" label="Login" />
            // </div>
         