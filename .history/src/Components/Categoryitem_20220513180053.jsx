import styled from "styled-components";
//import mobile from '../responsive';


const Container = styled.div`
  flex: 1
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Info = styled.div`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
`
const Title = styled.h1`
  
  font-size: 3vw;
  width: 100vw;
  color: green;
`
const Button = styled.button`
  border: none;
  background-color: yellow;
`


const Categoryitem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default Categoryitem
