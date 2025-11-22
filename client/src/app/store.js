import {configureStore }from "@reduxjs/toolkit"
import apiSlice from "./apiSlice"
import authSlice from "../features/auth/authSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authSlice
    },
    middleware:(getDefaultMiddleware)=>
       getDefaultMiddleware().concat(apiSlice.middleware),
      devTools:true
    })

    export default store;
    setupListeners(store.dispatch)