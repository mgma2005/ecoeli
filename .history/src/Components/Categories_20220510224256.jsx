import styled from "styled-components";
import { Categories } from '../data';
import Categoryitem from "./Categoryitem";


const Container = styled.div`
    display: flex;
    padding: 20px;
`



const ategories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <Categoryitem item={item}/>
        ))}
    </Container>
  )
}

export default categories
