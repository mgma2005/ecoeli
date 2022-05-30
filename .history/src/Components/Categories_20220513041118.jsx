import styled from "styled-components";
//import popularProducts from '../data';
import Categoryitem from '../Components/';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justufy-content: space-between;
`



const popularProducts = () => {
  return (
    <Container>
        {popularProducts.map(item=>(
            <Categoryitem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default popularProducts
