import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isFetching:false,
        isError:false,
        isRegisterError:false,
        isRegisterSuccess:false
    },
    reducers:{
        logginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.isError=false;
            state.currentUser=action.payload
        },
        loginFailure:(state)=>{
            state.isError=true;
            state.isFetching=false;
        },
        registerStart:(state)=>{
            state.isFetching=true;
            state.isRegisterError=false;
        },
        registerFailure:(state)=>{
            state.isFetching=false;
            state.isRegisterError=true;
            state.isRegisterSuccess=false;
        },
        registerSuccess:(state)=>{
            state.isRegisterSuccess=true;
        }
    }
})
export const {logginStart,loginSuccess,loginFailure,registerFailure,registerStart,registerSuccess}=userSlice.actions
export default userSlice.reducer;