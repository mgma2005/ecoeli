import styled from "styled-components";
import Navbar from '../pages/Navbar';
import Announcement from '../Components/Announcement';
import Newsletter from "../Components/Newsletter";
import Products from '../Components/Products'
import Footer from '../Components/Footer';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`


const ProductList = () => {
    return(
        <Container>
        <Navbar />
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
        <Filter>Fil
        </Filter>
        <Filter>filter2</Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer />
        </Container>
    );
}

export default ProductList