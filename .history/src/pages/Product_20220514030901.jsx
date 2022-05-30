import styled from "styled-components";
//import Navbar from "../Navbar";
import Product from './pages/P'


const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.div``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;



const Product = ({ item }) => {
  return (
    <Container>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://pymstatic.com/3654/conversions/frases-para-fotos-wide.jpg"/>
        </ImgContainer>
        <InfoContainer>
          <Title></Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed laborum sequi quis, quo, architecto commodi earum alias corrupti, corporis impedit eius accusamus at asperiores harum ipsa repudiandae perferendis. Cum? </Desc>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
