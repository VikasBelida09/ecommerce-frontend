import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
  
const Info = styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease;
`

const Container = styled.div`
    flex:1;
    min-width:280px;
    margin: 5px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative ;


    &:hover ${Info}{
        opacity: 1;
    }
`
const Image = styled.img`
    height: 75%; 
    z-index:2;
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
`
const Icon = styled.div`
   width: 40px;
   height: 40px;
   border-radius:50%;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px;
   cursor: pointer;
    transition: all 0.5s ease;

   &:hover{
    background-color: #e9f5f5;
    transform:scale(1.1);
   }
`
const Product = ({ _id, img }) => {
    return (
        <Container key={_id}>
            <Circle />
            <Image src={img} />
            <Info >
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${_id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
