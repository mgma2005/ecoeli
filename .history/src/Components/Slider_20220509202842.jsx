//import { ArrowLeftAltOutlined, ArrowRightAltOutlined } from '@material-ui/icons'
import { styled } from '@material-ui/core'

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
        <ArrowRightAlt/>
      </Arrow>
      <Arrow>
        <ArrowRightAlt/>
      </Arrow>
    </Container>
  )



}

export default Slider
