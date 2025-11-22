import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {useUpdateJewelMutation} from "./jewelApiSlice"

import { Dropdown } from 'primereact/dropdown';

const DialogUpdate=(props)=>{
    const product=props.product
    const [selectedCity, setSelectedCity] = useState(null);
 

    const cities = [
        { name: 'ring', code: '1' },
        { name: 'earring', code: '2' },
        { name: 'chain', code: '3' },
        { name: 'bracelet', code: '4' },
    ];
const [updateJewel]=useUpdateJewelMutation()
const [visible, setVisible] = useState(false);
const [formData,setFormData]=useState({
    _id:product._id,
    jeweName:product.jeweName,
    grossWt:product.grossWt,
    gold:product.gold,
    cvd:product.cvd,
    type:product.type,
    price:product.price,
    img:product.img
    
})

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
    updateJewel(formData)
   
}
   
    return (
        // <div className="card flex justify-content-center">
        <span>
            <Button label={`update ${product.jeweName}`} icon="pi pi-external-link" onClick={() => setVisible(true)} />
           
            <Dialog
                visible={visible}
                modal
                onHide={() => {if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        
                            
                            <label htmlFor="jeweName" className="text-primary-50 font-semibold">
                            JewelName
                            </label>
                            <InputText name="jeweName"  style={{height:"2rem"}}defaultValue={product.jeweName}onChange={(e)=>{handleChange(e)}} id="jeweName" label="jeweName" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                       
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="grossWt" className="text-primary-50 font-semibold">
                            grossWt
                            </label>
                            <InputText name="grossWt" type="number"  style={{height:"2rem"}}defaultValue={product.grossWt} onChange={(e)=>{handleChange(e)}} ionChange={()=>{}} id="grossWt" label="grossWt" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="gold" className="text-primary-50 font-semibold">
                            Gold
                            </label>
                            <InputText name="gold" type="number" style={{height:"2rem"}} defaultValue={product.gold} onChange={(e)=>{handleChange(e)}} id="gold" label="gold" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="cvd" className="text-primary-50 font-semibold">
                            cvd
                            </label>
                            <InputText style={{height:"2rem"}} name="cvd" type="number" defaultValue={product.cvd} onChange={(e)=>{handleChange(e)}} id="cvd" label="cvd" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
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
                            <InputText name="price" type="number" style={{height:"2rem"}} defaultValue={product.price}onChange={(e)=>{handleChange(e)}} id="price" label="price" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Update"style={{height:"2rem"}} onClick={(e)=>handleSubmit(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Close"style={{height:"2rem"}} onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        {/* // </div> */}
        </span>
    )
}
export default DialogUpdate 