import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive'
const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 position: relative;
 overflow:hidden;
 ${mobile({display:"none "})};
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius:50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin:auto;
  left:${props => props.direction === "left" && "10px"};
  right:${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 10;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex*-100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color:  #${props=>props.bg};
`
const ImageContainer = styled.div`
    flex:1;
    height: 100%;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
const Image = styled.img`
     height: 80%;
`

const Title=styled.h1`
    font-size: 70px;
`
const Description=styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px ;
`
const Button=styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
`
const Slider = () => {
    const [sliderIndex, setSliderIndex]=useState(0);
    const handleClick=(direction)=>{
        const slides=sliderItems.length;
        if(direction==="left"){
           setSliderIndex((sliderIndex-1+slides)%slides);
        }else{
            setSliderIndex((sliderIndex+1)%slides)
        }
    } 
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={sliderIndex}>
                {
                    sliderItems.map(({id,img,title,desc,bg})=>(
                        <Slide bg={bg} key={id}>
                        <ImageContainer>
                            <Image src={img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{title}</Title>
                            <Description>{desc}</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
