import React from 'react'

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
           <ArrowCircle/> 
        </Arrow>
    </Container>
  )
}

export default Slider
