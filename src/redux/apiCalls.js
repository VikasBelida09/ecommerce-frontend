import { publicRequest } from "../requestMethods";
import { logginStart, loginFailure, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userSlice"

export const login=async(dispatch,user)=>{
   dispatch(logginStart());
   try {
    const resp= await publicRequest.post('/auth/login',user);
    dispatch(loginSuccess(resp.data));
   } catch (error) {
     dispatch(loginFailure())
   }
}
export const register=async(dispatch,user)=>{
    dispatch(registerStart());
   try {
    await publicRequest.post('/auth/register',user);
    dispatch(registerSuccess());
   } catch (error) {
     dispatch(registerFailure())
   }
}