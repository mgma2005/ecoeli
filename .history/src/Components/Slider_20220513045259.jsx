import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from "../data";





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
       
      {sliderItems.map((item) => (
     
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
