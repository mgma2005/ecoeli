import styled from "styled-components";
//import Product from '../pages/Product';
import Announcement from "../Components/Announcement";

const Container = styled.div`
  padding: 50px;
  display: flex;
`;

const Wrapper = styled.div``;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.div`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 
`;

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
          <Title>nkjnkjnknk</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed laborum sequi quis, quo, architecto commodi earum alias corrupti, corporis impedit eius accusamus at asperiores harum ipsa repudiandae perferendis. Cum? </Desc>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
