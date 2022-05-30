import styled from "styled-components";
import { Categories } from '../data';
import Categoryitem from '../Categoryitem';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justufy-content: space-between;
`



const Categorie = () => {
  return (
    <Container>
        {Categories.map(item=>(
            <Categoryitem item={item}/>
        ))}
    </Container>
  )
}

export default Categories
