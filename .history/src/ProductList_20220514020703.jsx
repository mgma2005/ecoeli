import styled from '../styled-components';
import Navbar from './pages/Navbar';
import Announcement from './Components/Announcement';

const Container = styled.div`

`

const ProductList = () => {
    return(
        <Container>
        <Navbar />
        <Announcement/>
        <Title><Dresses></Dresses></Title>
        <FilterContainer>
        <Filter>

        </Filter>

        </FilterContainer>
        </Container>
    );
}

export default ProductList