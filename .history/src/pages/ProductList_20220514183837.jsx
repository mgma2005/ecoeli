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


const ProductList = () => {
    return(
        <Container>
        <Navbar />
        <Announcement/>
        <Products/>
        <Newsletter/>
        <Footer />
        </Container>
    );
}

export default ProductList