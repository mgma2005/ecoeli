import Announcement from '../Components/Announcement';
import React from 'react';
import Navbar from '../pages/Navbar';
import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div``;

const Bottom = styled.div``;



const Cart = () => {
  return (
    <Container>
    <Announcement/>
    <Wrapper>
    <Title>YOUR BAG</Title>
    <Top></Top>
    <Bottom></Bottom>
    </Wrapper>
    <Navbar/>
    Cart
    </Container>
  )
}

export default Cart
