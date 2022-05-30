import styled from "styled-components";
import Categorie
import Categoryitem from '../Components/Categoryitem';


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
