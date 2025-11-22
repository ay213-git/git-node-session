
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
 import {useGetAllJewelsQuery,useDeleteJewelMutation,useGetJewelQuery} from "./jewelApiSlice"
 import {useAddToBasketMutation}from "../basket/basketApiSlice"
 import useAuth from "../auth/useAuth"
 import React, { useState } from "react";
 import { useSelector } from 'react-redux';
 
import  DialogUpdate from './DialogUpdate'
import DialogAdd from './DialogAdd';
 import {  Link, useNavigate } from 'react-router-dom';
const JewelList = () => {
    const { data:products=[],isError,isLoading,refetch}=useGetAllJewelsQuery()
    const [addJewel]=useAddToBasketMutation()
    const { isUserLoggedIn } = useSelector((state) => state.auth)

  
    const [obj] = useAuth()
    let roles
    if(obj){
     
        roles  = obj.roles;  
        console.log("roles",roles);
    }
    const [deleteJewel]=useDeleteJewelMutation()
   
    const handleDelete=(id)=>{
        deleteJewel(id)
    }
    
    
    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };


        const itemTemplate = (product, index) => {
        return (
           
            <div className="col-12" key={product._id}>
                <div  className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })} >
                <Link to={`/getJewels/${product._id}`} >
                    <img  className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.img} />
                </Link>
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.jeweName}</div>
                            <Rating value={product.cvd} readOnly cancel={false}></Rating>
                            <span className="font-semibold">Basic materials of diamond jewelry:
                                </span>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2"></span>
                                    <i className="pi pi-tag">CVD:{product.cvd}</i>
                                    <i className="pi pi-tag">Gold:{product.gold}</i>
                                    <i className="pi pi-tag">GrossWt:{product.grossWt}</i>
                                    
                                <Tag value={product.type} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <span className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <span>  {isUserLoggedIn &&<Button style={{disabled:"true"}} onClick={()=>{addJewel(product._id)}} icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>}</span> 
                      <span> {roles == "Admin"&&<Button onClick={()=>handleDelete(product._id)} label="Delete" icon="pi pi-trash" text raised />}</span> 
                       {roles == "Admin"&&<DialogUpdate product={product}></DialogUpdate>}
    
                     
                        </span>
                    </div>
                </div>
            </div>
           
        );
    };

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;

        let list = items.map((product, index) => {
            return itemTemplate(product, index)
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };

    return (
        <>
         { roles == "Admin"&&<DialogAdd></DialogAdd>}

        <div className="card">
            <DataView value={products} listTemplate={listTemplate} paginator rows={5} />
        </div>
        </>
     
    )
}
export default JewelList