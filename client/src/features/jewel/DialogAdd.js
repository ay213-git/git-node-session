import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {useAddNewJewelMutation} from "./jewelApiSlice"
import { Message } from 'primereact/message';
import { Dropdown } from 'primereact/dropdown';



const DialogAdd=()=>{
    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        { name: 'ring', code: '1' },
        { name: 'earring', code: '2' },
        { name: 'chain', code: '3' },
        { name: 'bracelet', code: '4' },
    ];
   
const [addJewel,{isError,error,isSuccess}]=useAddNewJewelMutation()
const [visible, setVisible] = useState(false);
const [formData,setFormData]=useState({
    jeweName:"",
    grossWt:1,
    gold:1,
    cvd:1,
    type:"ring",
    price:1,
    img:"http://localhost:2222/1.JPG"
    
})
useEffect(()=>{
if(isSuccess)
    console.log("hu");
   // setVisible(false)
},[isSuccess])
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};
const change = (e) => {
    
    setSelectedCity(e.target.value)
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value.name
    });}

const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.gold>10 || formData.cvd>10 ||formData.grossWt>10){
        alert("max 10")
        return
    } 
    setVisible(false);
    addJewel(formData)
   
}
   

return (
       
        <span>
             
           
            <div className="card flex justify-content-center">
        <Button label="add jewel" onClick={() => setVisible(true)}/>
        </div>
            
          
            <Dialog
                visible={visible}
                modal
                onHide={() => {if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
               
                            <label htmlFor="jeweName" className="text-primary-50 font-semibold">
                            JewelName
                            </label>
                            <InputText  style={{height:"2rem"}}name="jeweName" defaultValue={formData.jeweName}onChange={(e)=>{handleChange(e)}} id="jeweName" label="jeweName" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="grossWt" className="text-primary-50 font-semibold">
                            grossWt
                            </label>
                            <InputText type="number"  style={{height:"2rem"}} name="grossWt" defaultValue={formData.grossWt} onChange={(e)=>{handleChange(e)}}  id="grossWt" label="grossWt" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="gold" className="text-primary-50 font-semibold">
                            Gold
                            </label>
                            <InputText   type="number"  style={{height:"2rem"}} name="gold"defaultValue={formData.gold} onChange={(e)=>{handleChange(e)}} id="gold" label="gold" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="cvd" className="text-primary-50 font-semibold">
                            cvd
                            </label>
                            <InputText  type="number" style={{height:"2rem"}}name="cvd"defaultValue={formData.cvd} onChange={(e)=>{handleChange(e)}} id="cvd" label="cvd" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="type" className="type">
                            type
                            </label>
                           
        <Dropdown value={selectedCity} required onChange={(e) =>change(e)} options={cities} optionLabel="name" 
            placeholder="ring" name="type" className="bg-white-alpha-20 border-none p-3 text-primary-50" />
    
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="price" className="price">
                            price
                            </label>
                            <InputText type="number"  min={9} max={11}  style={{height:"2rem"}}name="price" defaultValue={formData.price}onChange={(e)=>{handleChange(e)}} id="price" label="price" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        {isError&&  <Message severity="error" text={JSON.stringify(error.data)} />}
                        <div className="flex align-items-center gap-2">
                            <Button style={{height:"2rem"}}label="Update" onClick={(e)=>handleSubmit(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button style={{height:"2rem"}}label="Close" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>

                        
                    </div>
                )}
            ></Dialog>
        </span>
    )
}
export default DialogAdd 



