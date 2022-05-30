import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';


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
    

`
const Wrapper = styled.div`
  display: flex;
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
  margin-left: 15%;
`

const  InfoContainer= styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-family: cursive;
`
const Desk = styled.p`
  font-size: 3vw;
  margin-right: 15%;
`
const Button = styled.button`
  background-color: lightgreen;
`


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ChevronLeftOutlined/>
      </Arrow>
      <Wrapper>
      <Slide>

        <ImageContainer>
         <Image src="https://m.media-amazon.com/images/I/61+fasySBQL._AC_UX575_.jpg"/>
        </ImageContainer>

        <InfoContainer>
          <Title>Printed Boots</Title>
          <Desk>High quality leather combined with </Desk>
          <Button>SHOW NOW</Button>
        </InfoContainer>

      </Slide>
      <Slide>

<ImageContainer>
 <Image src="https://m.media-amazon.com/images/I/61+fasySBQL._AC_UX575_.jpg"/>
</ImageContainer>

<InfoContainer>
  <Title>Boeing 737</Title>
  <Desk>La chancha vuela desde el siglo 18</Desk>
  <Button>SHOW NOW</Button>
</InfoContainer>

</Slide>
<Slide>

<ImageContainer>
 <Image src="https://m.media-amazon.com/images/I/61+fasySBQL._AC_UX575_.jpg"/>
</ImageContainer>

<InfoContainer>
  <Title>Boeing 737</Title>
  <Desk>La chancha vuela desde el siglo 18</Desk>
  <Button>SHOW NOW</Button>
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
