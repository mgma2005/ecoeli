import styled from "styled-components";
import Navbar from "./Navbar";
import Product from "../Pages/Product";


const Container = styled.div`
  
`;



const Product = ({ item }) => {
  return (
    <Container>
      <Navbar/>
    </Container>
  );
};

export default Product;
