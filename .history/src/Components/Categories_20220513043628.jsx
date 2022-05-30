import styled from "styled-components";
import { categories } from "../data";
import Categoryitem from '../Components/Categoryitem';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justufy-content: space-between;
`



const Categories = () => {
  return (
    <Container>
        {.map(item=>(
            <Categoryitem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories
