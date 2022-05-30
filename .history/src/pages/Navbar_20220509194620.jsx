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

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid gray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`

const Input = styled.input`
    border= none;
`
const Logo = styled.h1`
    font-weight: bold;
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
            <Left>
               <Language>EN</Language>
               <SearchContainer>
                   <Input/>
                   <Search style={{color:"", fontSize: 16}}/>
               </SearchContainer>
            </Left>
            <Center><Logo>VAMP</Logo></Center>
            <Right style={{padding: 5, margin: 5}}>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem style={{padding: 30}}>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgecontent={4} color="primary">
                    <ShoppingBasketOutlined/>
                </Badge>
                </MenuItem>

            </Right>
            </Wrapper> 
        </Container>
    );
}

export default Navbar;