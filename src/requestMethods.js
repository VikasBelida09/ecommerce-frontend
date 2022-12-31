import axios from "axios";

const BASE_URL=process.env.NODE_ENV==='production'?'https://ecommerce-backend-smvy.onrender.com/api/':'http://localhost:3001/api/';
const token=JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root"))?.user)?.currentUser.accessToken;
export const publicRequest=axios.create({
    baseURL:BASE_URL
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{
        token:`Bearer ${token}`
    } 
})