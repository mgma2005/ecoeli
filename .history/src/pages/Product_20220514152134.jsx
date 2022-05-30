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
  padding: 0px 50 px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p``;

const Price = styled.span`
  font-size: 3vw;
`;


const AddContainer = styled.option`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span``;

const Button = styled.button``;

const 

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
          <AddContainer>

            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
