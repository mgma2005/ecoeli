import styled from "styled-components";
//import { Categories } from '../data';
//import CategoryItem from '../Categoryitem';


const Container = styled.div`
    display: flex;
    padding: 20px;
`



const CategoryItem = () => {
  return (
    <Container>
        {Categories.map(item=>(
            <Category item={item}/>
        ))}
    </Container>
  )
}

export default Categories