import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div``

const Categoies = ({item}) => {
  return (
    <Container>
        {Categories.map(item=>(

          <CategoryItem />
        ))}
    </Container>
  )
}

export default Categories
