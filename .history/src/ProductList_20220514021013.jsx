import styled from '../styled-components';
import Navbar from '../pages/Navbar';
import Announcement from '../Components/Announcement';

const Container = styled.div``;
const Title = styled.div``;
const FilterContainer = styled.div``;
const  = styled.div``;


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