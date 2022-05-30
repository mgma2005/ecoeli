import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div`
  flex: 1
`
const Image = styled.img`
  width: 100%;
`

const Container = styled.div``
const Image = styled.div``

const I = styled.div``
const Title = styled.div``
const Button = styled.div``


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <title>{item.title}</title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default Categories
