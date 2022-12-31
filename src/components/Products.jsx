import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { publicRequest } from '../requestMethods'
import Product from './Product'

const Container=styled.div`
   display: flex;
   padding: 20px;
   flex-wrap: wrap;
`

const Products = ({cat,filters,sort} ) => {
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);
  useEffect(()=>{
    const getProducts=async()=>{
       try {
        console.log(cat)
        const res=await publicRequest.get(cat?`/products?category=${cat}`:`/products`);
        console.log(res);
        setProducts(res.data); 
       } catch (error) {
        console.log(error);
       }
    }
    getProducts()
  },[cat]);

  useEffect(()=>{
    if(cat){
      setFilteredProducts(products.filter(item=>Object.entries(filters).every(([key,value])=>item[key].includes(value) )))
    }
  },[cat,filters,products])

  useEffect(()=>{
    if(sort==='newest'){
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt-b.createdAt));
    }else if(sort==='asc'){
      setFilteredProducts((prev) => [...prev].sort((a,b)=>a.price-b.price));
    }else if(sort==='desc'){
      setFilteredProducts((prev) => [...prev].sort((a,b)=>b.price-a.price));
    }
  },[sort])
  return (
    <Container>
        {
            cat? filteredProducts.map((item)=>(
                <Product {...item}/>
            )):products.slice(0,8).map((item)=>(
              <Product {...item}/>
          ))
        }
    </Container>
  )
}

export default Products
