//import { Add } from "@material-ui/icons";
//import { Remove } from "@material-ui/icons";
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

const Announcement = styled.div

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

const Add = styled.div``;

const Remove = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Announcement styled="display:flex"/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/800px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg"/>
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
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
