import Announcement from '../Components/Announcement';
import React from 'react';
import Navbar from '../pages/Navbar';
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div``;
const Top = styled.div``;
const Bottom = styled.div``;



const Cart = () => {
  return (
    <Container>
    <Announcement/>
    <Title>YOUR BAG</Wrapper>
    <Top></Top>
    <Bottom></Bottom>
    <Navbar/>
    Cart
    </Container>
  )
}

export default Cart
