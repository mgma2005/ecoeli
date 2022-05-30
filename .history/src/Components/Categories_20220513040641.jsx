import styled from "styled-components";
import popularProducts from '../data';
import Categoryitem from '../Categoryitem';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justufy-content: space-between;
`



const popul = () => {
  return (
    <Container>
        {Categories.map(item=>(
            <Categoryitem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories
