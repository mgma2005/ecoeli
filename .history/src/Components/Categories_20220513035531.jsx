import styled from "styled-components";
import Categories from './';
import Categoryitem from '../Components/Categoryitem';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justufy-content: space-between;
`



const puti = () => {
  return (
    <Container>
        {Categories.map(item=>(
            <Categoryitem item={item}/>
        ))}
    </Container>
  )
}

export default Categories
