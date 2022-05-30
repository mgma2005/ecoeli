import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    margin-top: 10%;
    height: 100vh;
    display: flex;
    position: relative;
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    border-radious: 100%;
    align-items: center;
    justify-content: center;
    background-color: green;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    border: 0.3vw solid black;
    

`
const Wrapper = styled.div`
  display: flex;
  height: 100%
  transform: translateX(-200vw);

`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props=>props.bg};
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
  flex: 1;
  height: 80%;
  margin-left: 15%;
`

const  InfoContainer= styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-family: cursive;
  
`
const Desc = styled.p`
  font-size: 3vw;
  margin-right: 15%;
  letter-spacing: 3px;
`
const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  
`


const Slider = () => {

  const [sliderindex, setsliderindex] = useState(0)

  const handleClick = (direction) => {

  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ChevronLeftOutlined/>
      </Arrow>
      <Wrapper>
      {sliderItems.map((item) => (
     
     <Slide bg="fff000">
 
        <ImageContainer>
         <Image src="https://m.media-amazon.com/images/I/61+fasySBQL._AC_UX575_.jpg"/>
        </ImageContainer>

        <InfoContainer>
          <Title><u>Printed Boots:</u></Title>
          <Desc>High quality leather combined with a fine printing of sunflowers motif.</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>

      </Slide>
        ))}
      <Slide bg="ff00ef">

<ImageContainer>
 <Image src="https://cdn.shopify.com/s/files/1/0346/6845/products/Luna-Sandals-Venado_2048x.png?v=1608830259"/>
</ImageContainer>

<InfoContainer>
  <Title>Sandals</Title>
  <Desc>Confortable footwear for every seasson</Desc>
  <Button>SHOW NOW</Button>
</InfoContainer>

</Slide>
<Slide>

<ImageContainer>
 <Image src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQNVDKoN_tJjltuLrvloRh1c-dH5WgU1yEWXwFjA9xP8uiVKWPRGOZiBxAnFyia0XGLSA7cBnuhQoaV776U0TA"/>
</ImageContainer>

<InfoContainer>
  <Title>Snickers</Title>
  <Desc>Resistent footwear for most demanding sportsman</Desc>
  <Button>SHOW NOW</Button>
</InfoContainer>

</Slide>
      </Wrapper>
     
      <Arrow direction="right" onClick={()=>handleClick("right")}>
         <ChevronRightOutlined/>
      </Arrow>
      
    </Container>
  )



}

export default Slider
