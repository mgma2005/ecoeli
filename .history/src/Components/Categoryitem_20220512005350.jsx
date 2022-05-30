import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div`
  flex: 1
`
const Image = styled.img`
  width: 100%;
`

onst Info = styled.div``
const Title = styled.h1``
const Button = styled.Button``


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
