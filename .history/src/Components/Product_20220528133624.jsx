import React, { useState } from 'react';
//import { popularProducts } from '../data';
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: pink;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
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



const Product = ({ item }) => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <><div>
      <p>Added {count} of this product.</p>
      <p>price is: {price}</p>
      </div><Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          
        <div>
            <p>{item.title}</p>
            <p>{item.price}</p>

          </div>
        <Button  onClick={() => setCount(count + 1)}, {(setP)}>add</Button>
            <ShoppingCartOutlined />
        
        </Info>
      </Container></>
  );
};

export default Product;
