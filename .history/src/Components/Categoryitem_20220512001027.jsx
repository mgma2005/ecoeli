import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div``
const Image = styled.img``
const Container = 

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
