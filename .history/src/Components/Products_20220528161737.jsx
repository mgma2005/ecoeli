import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React, { useState } from 'react';
import { ShoppingCartOutlined,Remove } from "@material-ui/icons";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Products = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
    <Button onClick={() => setCount(count + 1)}>



</Button>
<Button onClick={() => setCount(count - 1)}>

<Remove />

</Button>
          {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      <div>total: {count * price}</div>

    </Container>
  );
};

export default Products;
