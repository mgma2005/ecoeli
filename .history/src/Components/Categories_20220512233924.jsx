import styled from "styled-components";
//import { Categories } from '../data';
//import CategoryItem from '../Categoryitem';


const Container = styled.div`
    display: flex;
    padding: 20px;
`



const CategoryI = () => {
  return (
    <Container>
        {Categories.map(item=>(
            <Categories item={item}/>
        ))}
    </Container>
  )
}

export default Categories
