import React from 'react'
import { ArrowLeftAltOutlined, ArrowRightAltOutlined } from '@material-ui/icons'
import { styled } from '@material-ui/core/node_modules/@material-ui/styles'

const Container = styled.div`
    width: 100%;
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
           <div></div>
        </Arrow>

        <Arrow>
          <ArrowRightAltOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider