import { styled } from "@material-ui/core";
import { Categories } from "../data";


const Container = styled.div``

const Ca = ({item}) => {
  return (
    <Container>
        {Categories.map(item=>(

          <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories
