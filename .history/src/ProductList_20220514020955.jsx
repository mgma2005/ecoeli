import styled from '../styled-components';
import Navbar from '../pages/Navbar';
import Announcement from '../Components/Announcement';

const Container = styled.div``;
const T = styled.div``;
const Container = styled.div``;
const Container = styled.div``;


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