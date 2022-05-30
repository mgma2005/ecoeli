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
    border-radious: 50%;
    align-items: center;
    justify-content: center;
    background-color: green;
    position: absolute;
    

`


const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ChevronLeftOutlined/>
      </Arrow>
      <Arrow>
         <ChevronRightOutlined/>
      </Arrow>
      
    </Container>
  )



}

export default Slider
