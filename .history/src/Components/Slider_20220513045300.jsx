import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from "../data";



const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;



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