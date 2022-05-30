import React from 'react'
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@material-ui/icons'

const Container = styled.div`
    width: 10%;
    height: 100vh;
    display: flex;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justif

`


const Slider = () => {
  return (
    <Container>
        <Arrow>
           <ArrowCircleLeftOutlined/> 
        </Arrow>

        <Arrow>
           <ArrowCircleRightOutlined/> 
        </Arrow>
    </Container>
  )
}

export default Slider
