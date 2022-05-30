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
const ImgContainer = styled.div`
  flex: 1
`
const  InfoContainer= styled.div``

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ChevronLeftOutlined/>
      </Arrow>
      <Wrapper>

      </Wrapper>
      <Arrow direction="right">
         <ChevronRightOutlined/>
      </Arrow>
      
    </Container>
  )



}

export default Slider
