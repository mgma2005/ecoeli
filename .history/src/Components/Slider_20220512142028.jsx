import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { SliderItems } from '../Categories';

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
  height: 100%;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  transition: all 2s ease;
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

  const [slideIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {

    if(direction==="left"){
      setSliderIndex(slideIndex > 0 ? slideIndex-1 : 2 );
    } 
    if(direction==="right"){
      setSliderIndex(slideIndex <2 ? slideIndex+1 : 0);
    }

  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ChevronLeftOutlined/>
      </Arrow>
     
     <Wrapper slideIndex={slideIndex}>
       
      {SliderItems.map((item) => (
     
     <Slide bg={item.bg}>
 
        <ImageContainer>
         <Image src={item.img}/>
        </ImageContainer>

        <InfoContainer>
          <Title><u>{item.title}:</u></Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>

      </Slide>
        ))}
     
      </Wrapper>
      
      <Arrow direction="right" onClick={()=>handleClick("right")}>
         <ChevronRightOutlined/>
      </Arrow>
      
    </Container>
  
)}

export default Slider
