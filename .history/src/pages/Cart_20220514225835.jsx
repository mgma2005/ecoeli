import Announcement from '../Components/Announcement';
import React from 'react';
import Navbar from '../pages/Navbar';
import styled from 'styled-components';

const Container = styled.div`

`;



const Cart = () => {
  return (
    <Container>
    <Announcement/>
    <Wrapper>YOUR BAG</Wrapper>
    <Top></Top>
    <Bott></Top>
    <Navbar/>
    Cart
    </Container>
  )
}

export default Cart
