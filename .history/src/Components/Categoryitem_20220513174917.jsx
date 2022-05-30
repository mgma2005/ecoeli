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
  color: ;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  padding: 10px
  color: yellow;
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
