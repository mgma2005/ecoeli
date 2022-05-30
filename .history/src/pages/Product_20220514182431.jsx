import React from "react";
import { AddCircleOutline } from "@material-ui/icons";
import { RemoveCircleOutline } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Navbar from '../pages/Navbar';
import Footer from '../Components/Footer';




const Container = styled.div`
  padding: 50px;
  
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.div`
  width: 100%;
  height: 90vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50 px;
`;

const Title = styled.h1`
  font-weight: 200;
  margin-top: 20%;  
`;

const Desc = styled.p``;

const Price = styled.span`
  font-size: 3vw;
`;

const AddContainer = styled.option`

`;

const AddCircleOutline = styled.button``

const AmountContainer = styled.div`
  
`;
const Amount = styled.span``;

const Button = styled.button`
  
`;


const Product = ({ item }) => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
        <ImgContainer>
        <Image src="https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Clothes</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed laborum sequi quis, quo, architecto commodi earum alias corrupti, corporis impedit eius accusamus at asperiores harum ipsa repudiandae perferendis. Cum? </Desc>
          <Price>$ 20</Price>
          <AddContainer>

            <AmountContainer>
              <RemoveCircleOutline/>
              <Amount>1</Amount>
              <AddCircleOutline/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
