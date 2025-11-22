import {createSlice} from "@reduxjs/toolkit"

const authInitState={
    token:localStorage.getItem("token")||"",
    isUserLoggedIn:localStorage.getItem("token")?true:false
}
const authSlice=createSlice({
    name:"auth",
    initialState:authInitState,
    reducers:{
        setToken:(state,action)=>{
        const token=action.payload.token
        state.token=token
        state.isUserLoggedIn=true
        localStorage.setItem("token",token)
        },
        
        cleareToken:(state)=>{

            state.token=""
            state.isUserLoggedIn=false
            localStorage.removeItem("token")
        }
    }
})
export const {setToken,cleareToken}=authSlice.actions
export default authSlice.reducer