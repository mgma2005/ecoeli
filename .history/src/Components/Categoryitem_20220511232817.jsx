import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div``

const Categoies = ({item}) => {
  return (
    <Container>
        {Categories.map(item=>(

          <ategoryItem/>
        ))}
    </Container>
  )
}

export default Categories
