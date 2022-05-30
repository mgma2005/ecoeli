import styled from "styled-components";
import Navbar from "../Navbar";
import Product from "../Pages/Product";


const Container = styled.div`
  
`;



const Product = ({ item }) => {
  return (
    <Container>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <img src="https://pymstatic.com/3654/conversions/frases-para-fotos-wide.jpg"/>
        </ImgContainer>
        <InfoContainer>
          <Title></Title>
          <Title></Title>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
