import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Tot = styled.div`
  font-size:
`;

const Products = () => {
  return (
    <><Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    <div>TOTAL:</div></>
  );
};

export default Products;
