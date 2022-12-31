import axios from "axios";

const BASE_URL='https://ecommerce-backend-smvy.onrender.com/api/'
const token=JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root") || '{}')?.user || '{}')?.currentUser?.accessToken;

export const publicRequest=axios.create({
    baseURL:BASE_URL
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{
        token:`Bearer ${token}`
    } 
})