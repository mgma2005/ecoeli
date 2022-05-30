import React from 'react'
import {  }

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
`

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
