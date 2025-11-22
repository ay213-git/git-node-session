import { useNavigate, useParams } from "react-router-dom"
import { useGetJewelQuery } from "./jewelApiSlice"
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Jewel=()=>{
    const navigate=useNavigate()

    const {id}=useParams()
        const { data:JewelList,isSuccess,isError,error,isLoading,refetch}=useGetJewelQuery(id)
        console.log(id);
        if(isError){
            return(<h1>{error}</h1>)
        }
        if(isLoading){
            return(<h1>Loading...</h1>)  
        }
        if(isSuccess){
   

    const header = (
        <img alt="Card" style={{height:"10rem"}} src="http://localhost:2222/רקע.JPG" />
    );
    

   return (

        <div className="card flex justify-content-center">
            <Card title={JewelList.jeweName}style={{height:"40rem"}}  subTitle={JewelList.type}  className="md:w-25rem">
                <p className="m-0">
                
                <h2>cvd: {JewelList.cvd}</h2>
                <h2>gold: {JewelList.gold}</h2>
                <h2>grossWt: {JewelList.grossWt}</h2>
                <img style={{width:"15rem"}} src={JewelList.img}></img>
                <h2>price: ${JewelList.price}</h2>
                <Button onClick={()=>{navigate("/")}} style={{marginRight:"100%",width:"5rem"}} severity="secondary" label="return" />

                </p>
            </Card>
        </div>
    )
}
}
export default Jewel
