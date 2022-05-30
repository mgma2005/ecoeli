import styled from "styled-components";
import Navbar from '../pages/Navbar';
import Announcement from '../Components/Announcement';
import Newsletter from "../Components/Newsletter";

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div``;


const ProductList = () => {
    return(
        <Container>
        <Navbar />
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
        <Filter>filter</Filter>
        <Filter>filter2</Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        
        </Container>
    );
}

export default ProductList