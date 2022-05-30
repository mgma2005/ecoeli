import React from 'react'
import { ArrowR } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    background-color: yellow;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content- center;
    background-color: yellow;

`


const Slider = () => {
  return (
    <Container>
        <Arrow>
           <ArrowRightAltOutlined/> 
        </Arrow>

        <Arrow>
           <ArrowLeftAltOutlined/> 
        </Arrow>
    </Container>
  )
}

export default Slider
