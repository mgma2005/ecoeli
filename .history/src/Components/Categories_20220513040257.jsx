import styled from "styled-components";
import Categories from '../data';
import Categoryitem from '../Categoryitem';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justufy-content: space-between;
`



const Categories = () => {
  return (
    <Container>
        {Categories.map(item=>(
            <Categoryitem item={item} key=/>
        ))}
    </Container>
  )
}

export default Categories
