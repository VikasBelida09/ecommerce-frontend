import { Add, Remove } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { addProduct } from '../redux/cartRedux'
import { publicRequest } from '../requestMethods'
import { mobile } from '../responsive'
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
${mobile({ padding: '10px', flexdirection: 'column' })} ;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
${mobile({ height: '40vh' })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
${mobile({ padding: '10px' })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
${mobile({ width: '100%' })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;

  &:hover{
    transform: scale(1.05);
  }
  &:active{
    opacity:0.7;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
${mobile({ width: '10 0%' })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const prodId = location.pathname.split('/')[2];
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const [color, setColor] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resp = await publicRequest.get(`/products/find/${prodId}`)
        setProduct(resp.data);
      } catch (error) {
        console.log(error)
      }
    }
    getProduct();
  }, [prodId]);
  console.log(product, '--product page')

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size
      })
    )
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product?.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc> {product?.desc}</Desc>
          <Price>${product?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                product?.color?.map((color) => <FilterColor color={color} key={color} onClick={() => setColor(color)} />)
              }
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {
                  product?.size?.map((s) => <FilterOption key={s} >{s}</FilterOption>)
                }
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)} style={{ cursor: 'pointer' }} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => setQuantity(prev => prev + 1)} style={{ cursor: 'pointer' }} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product
