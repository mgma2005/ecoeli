import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div``

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image/>
        <Info>
          <title>{item.title}</title>
        </Info>
    </Container>
  )
}

export default Categories
