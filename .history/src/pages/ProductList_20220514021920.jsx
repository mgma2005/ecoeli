import styled from "styled-components";
import Navbar from '../pages/Navbar';
import Announcement from '../Components/Announcement';

const Container = styled.div``;

const Title = styled.h1`
    
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
        </Container>
    );
}

export default ProductList