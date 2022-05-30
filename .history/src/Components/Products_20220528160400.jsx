import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import count

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
        <Product item={item} key={item.id} />
      ))}
            <div>tot:{count}</div>

    </Container>
  );
};

export default Products;
