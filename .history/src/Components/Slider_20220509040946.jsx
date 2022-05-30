import React from 'react'
import { ArrowCircleRight, ArrowCircleLeft } from '@material-ui/icons'

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
`

const A


const Slider = () => {
  return (
    <Container>
        <Arrow>
           <ArrowCircleRight/> 
        </Arrow>

        <Arrow>
           <ArrowCircleLeft/> 
        </Arrow>
    </Container>
  )
}

export default Slider
