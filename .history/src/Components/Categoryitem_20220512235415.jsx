import styled from "styled-components";
//import { Categoryitem } from "../data";


const Container = styled.div`
  flex: 1
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 
`
const Title = styled.h1``
const Button = styled.button``


const Categories = ({item}) => {
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

export default Categories
