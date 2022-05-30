import { styled } from "styled-components";
import { categories } from "../data";
import Categoryitem from "./Categoryitem";


const Container = styled.div`
    
`



const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <Categoryitem item={item}/>
        ))}
    </Container>
  )
}

export default Categories
