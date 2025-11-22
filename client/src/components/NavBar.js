import { Link, useNavigate } from "react-router-dom";
import { Tag } from 'primereact/tag';
import { useSelector } from "react-redux";
import useAuth from '../features/auth/useAuth';
import { Button } from 'primereact/button';
import React from 'react'; 
import { cleareToken } from "../features/auth/authSlice"; 
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import {useDispatch}from "react-redux"


const NavBar = () => {
    const { isUserLoggedIn } = useSelector((state) => state.auth)
    const [obj] = useAuth()
    const dispatch=useDispatch()

    let roles
    if(obj){
     
      roles  = obj.roles;  
        console.log("roles",roles);
    }
    
    // return (
    //     <nav className="NavBar">
    //         {!isUserLoggedIn && <Link to={'/login'}>login</Link>}
    //         {!isUserLoggedIn && <Link to={'/register'}>register</Link>}
    //         {<Link to={'/getJewels'}>all-jewels</Link>}
    //         {isUserLoggedIn && <Link to={'/Jewel'}>jewel</Link>}
    //         {/* {isUserLoggedIn &&  roles == "Admin" &&<Link to={'/deleteJewel'}>delete-jewel</Link>}
    //         {isUserLoggedIn &&  roles == "Admin" &&<Link to={'/addJewel'}>add-jewel</Link>}
    //         {isUserLoggedIn &&  roles == "Admin" &&<Link to={'/updateJewel'}>update-jewel</Link>} */}
    //         {isUserLoggedIn && <Link to={'/basket'}>basket</Link>}
            

const navigate=useNavigate()
const exit=()=>{
    dispatch(cleareToken())
    navigate('/')
}



    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
            <button onClick={()=>navigate('/')} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-10rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <h2>All-Jewels</h2> <i className="pi pi-home text-2xl"></i>
            </button>
           {!isUserLoggedIn && <button onClick={()=>navigate('/login')}className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-10rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <h2>Login</h2> <i className="pi pi-home text-2xl"></i>
            </button>}
            {!isUserLoggedIn &&<button onClick={()=>navigate('/register')} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-10rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <h2>Register</h2> <i className="pi pi-home text-2xl"></i>
            </button>}
            {isUserLoggedIn &&<button  onClick={()=>exit()} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-10rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <h2>Exit</h2> <i className="pi pi-home text-2xl"></i>
            </button>}
            {isUserLoggedIn &&<button  onClick={()=>navigate('/basket')} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-10rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <h2>Basket</h2>  <i className="pi pi-shopping-cart"></i>
            </button>}
            {/* {/* <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-user text-2xl"></i>
            </button> */}
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
               
            </button>
      
           
       
        </div>
    );

    return (
        <div className="card">
            <Toolbar center={centerContent} className="bg-gray-900 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }} />
        </div>
    );


            {/* {/* <div className="card flex justify-content-center">
            {!isUserLoggedIn && <Button label="Login" link onClick={() =>  window.open('localhost:2222/login')}/>}
            {!isUserLoggedIn && <Button label="Register" link onClick={() =>  window.open('localhost:2222/register')}/>}          
            { <Button label="All-Jewel" link onClick={() =>  window.open('localhost:2222/getJewels')}/>}          
            {isUserLoggedIn && <Button label="Jewel" link onClick={() =>  window.open('localhost:2222/Jewel')}/>}          
            {isUserLoggedIn &&  <Button label="Basket" link onClick={() =>  window.open('localhost:2222/basket')}/>} */}
        {/* </nav>) */}
}
export default NavBar