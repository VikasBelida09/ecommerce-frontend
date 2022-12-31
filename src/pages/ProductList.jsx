import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
${mobile({margin:'0px 20px', display:'flex', flexDirection:'column'})};
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
${mobile({marginRight:'0px'})};
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:'10px 0px '})};
`
const Option = styled.option`
    
`
const ProductList = () => {
    const location=useLocation();
    const cat=location.pathname.split('/')[2];

    const [filterState,setFilterState]=useState({
    });
    const [sort,setSort]=useState("newest")

    const handleChange=(e)=>{
       const val=e.target.value;
       setFilterState({
            ...filterState,
            [e.target.name]:val 
       })
    }
    console.log(filterState);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat }</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter products:</FilterText>
                    <Select name="color" onChange={handleChange}>
                        <Option disabled >Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleChange}>
                        <Option disabled >
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filterState} sort={sort}/>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList
