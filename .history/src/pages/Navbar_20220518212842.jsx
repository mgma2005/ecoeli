import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';



const Container = styled.div`
height: 60px;

`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`


`


const Center = styled.div`
flex: 1;
text-align: center;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size= 14px;
    cursor: pointer;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
            
            <Center><Logo>VAMP</Logo></Center>
           
            </Wrapper> 
        </Container>
    );
}

export default Navbar;