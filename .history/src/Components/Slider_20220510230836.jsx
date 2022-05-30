import styled from 'styled-components';
//import { useState } from 'react';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';
import {sliderItems} from "../data";


const Container = styled.div`
    width: 100%;
    margin-top: 10%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
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
  transform:translateX(-100vw);
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props=>props.bg};
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

  const handleClick = (direction) => {

  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ChevronLeftOutlined/>
      </Arrow>
      <Wrapper>
        {sliderItems.map((item) => (
      <Slide bg={item.bg}>

        <ImageContainer>
         <Image src={item.img}/>
        </ImageContainer>

        <InfoContainer>
          <Title><u>{item.title}:</u></Title>
          <Desc>{item.desc}.</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>

      </Slide>
      ))}
      <Slide bg="fbf0f4">

<ImageContainer>
 <Image src="https://cdn.shopify.com/s/files/1/0346/6845/products/Luna-Sandals-Venado_2048x.png?v=1608830259"/>
</ImageContainer>

<InfoContainer>
  <Title>Sandals</Title>
  <Desc>Confortable footwear for every seasson</Desc>
  <Button>SHOW NOW</Button>
</InfoContainer>

    <Container/>

export default Slider
