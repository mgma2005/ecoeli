import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div`
  flex: 1
`
const Image = styled.img`

`
const Info = styled.div``
const Title = styled.div``
const Button = styled.div``


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <title>{item.title}</title>
        </Info>
    </Container>
  )
}

export default Categories
