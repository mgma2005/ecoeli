import styled from "styled-components";
import { popularProducts } from "../data";
import Products from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Products item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
