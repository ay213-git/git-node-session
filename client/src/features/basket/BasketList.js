import { useGetBasketQuery, useDeleteJewelOnBasketMutation, useAddToBasketMutation, useDeleteBasketMutation } from "./basketApiSlice"
import { useEffect, useState } from "react"
import useAuth from '../auth/useAuth';
// import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Message } from 'primereact/message';


const BasketList = () => {
    const { data: basket = {}, error, isError, isSuccess, isLoading, refetch } = useGetBasketQuery()
    const [deleteJewel] = useDeleteJewelOnBasketMutation()
    const [deleteBasket] = useDeleteBasketMutation()
    const [addJewel] = useAddToBasketMutation()
    // const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    const [obj] = useAuth()
    useEffect(() => {
        refetch()

    }, [isSuccess]);




    const itemTemplate = (item) => {
        console.log(item);
        return (

            <div className="flex flex-wrap p-2 align-items-center gap-3">

                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={item.jewel.img} />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.jewel.jeweName}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        {/* <span>gold:{item.gold}</span>
                        <span>cvd:{item.jewel.cvd}</span> */}
                        <span>quantity:{item.quantity}</span>
                    </div>
                </div>
                <span>  <Button onClick={() => addJewel(item.jewel._id)} icon="pi pi-plus" className="p-button-rounded" ></Button></span>
                <span>  <Button onClick={() => deleteJewel(item.jewel._id)} icon="pi pi-minus" className="p-button-rounded" ></Button></span>
                <Button onClick={() => deleteBasket(item.jewel._id)} label="delete" icon="pi pi-trash" text raised />
                {/* <Button onClick={()=>deleteJewel(item.jewel._id)}   icon="pi pi-minus" text raised />     */}
                <span className="font-bold text-900">${item.jewel.price}</span>
            </div>
        );
    };

    return (

        <div style={{ width: "100%", height: "75vh" }} className="card xl:flex xl:justify-content-center">
            {isError && <Message severity="error" text={JSON.stringify(error.data)} />}

            {isSuccess && <OrderList dataKey="id" value={basket.products} itemTemplate={itemTemplate} header="Products"></OrderList>}
        </div>
    )

}
export default BasketList;



