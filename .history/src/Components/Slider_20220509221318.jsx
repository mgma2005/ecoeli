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
  width: 100vw;
  height: 100vh;
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  flex: 1;
  height: 80%;
`

const  InfoContainer= styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1``
const Desk = styled.p``
const Button = styled.button``


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ChevronLeftOutlined/>
      </Arrow>
      <Wrapper>
      <Slide>
        <ImageContainer>
         <Image url="/img/1i.jpg"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Boeing 737</Title>
          <Desk>La chancha vuela desde el siglo 18</Desk>
          <Button>buy</Button>

        </InfoContainer>
      </Slide>
      </Wrapper>
     
      <Arrow direction="right">
         <ChevronRightOutlined/>
      </Arrow>
      
    </Container>
  )



}

export default Slider
