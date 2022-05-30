import { Add } from "@material-ui/icons";
import { Remove } from "@material-ui/icons";
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
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50 px;
  background-color: gray;
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
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
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
        <Image src=""/>
        </ImgContainer>
        <InfoContainer>
          <Title>Clothes</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed laborum sequi quis, quo, architecto commodi earum alias corrupti, corporis impedit eius accusamus at asperiores harum ipsa repudiandae perferendis. Cum? </Desc>
          <Price>$ 20</Price>
          <AddContainer>

            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
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
