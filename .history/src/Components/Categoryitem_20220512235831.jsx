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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex direction: column; 
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color:white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: 0
  padding: 10px
`


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
