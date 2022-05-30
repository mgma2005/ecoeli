import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';

const Container = styled.div`
    width: 100%;
    margin-top: 10%;
    height: 100vh;
    display: flex;
    background-color: orange;
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
    

`
const Wrapper = styled.div`
  height: 100%
`

const Slide = styled.div`
  display: flex;
  align-items: center;
`
const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img


const  InfoContainer= styled.div`
  flex: 1;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ChevronLeftOutlined/>
      </Arrow>
      <Wrapper>
        <ImageContainer>
          <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gq.com.mx%2Fmoda%2Farticulo%2Fbotas-militares-para-hombre-como-combinarlas&psig=AOvVaw2GtMRQJ6BAY8_IfxmFpHa6&ust=1652228508093000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJieoP3U0_cCFQAAAAAdAAAAABAD">
        </ImageContainer>
        <InfoContainer></InfoContainer>

      </Wrapper>
      <Arrow direction="right">
         <ChevronRightOutlined/>
      </Arrow>
      
    </Container>
  )



}

export default Slider
