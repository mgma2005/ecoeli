import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';

const Container = styled.div`
    width: 100%;
    margin-top
    height: 100vh;
    display: flex;
    background-color: yellow;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    border-radious: 50%;
    align-items: center;
    justify-content: center;
    background-color: yellow;

`


const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ChevronRightOutlined/>
      </Arrow>
      <Arrow>
        <ChevronLeftOutlined/>
      </Arrow>
      
    </Container>
  )



}

export default Slider
