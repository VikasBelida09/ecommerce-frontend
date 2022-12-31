import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    flex:1;
    margin: 3px;  
    position: relative;
    height: 70vh;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({ height: '30vh' })}; 
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
 color:white;
 margin-bottom: 20px;
`
const Button = styled.button`
   border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`
const CategoryItem = ({ id, img, title,cat }) => {
    return (
        <Container key={id}>
            <Link to={`/products/${cat}`}>
                <Image src={img} />
                <Info>
                    <Title>{title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
