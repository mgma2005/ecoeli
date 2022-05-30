import React from 'react';
import styled from 'styled-components';
import { Search } from "@material-ui/icons";



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
const Logo = styled


const Center = styled.div`
flex: 1;
`
const Right = styled.div`
flex: 1;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
            <Left>
               <Language>EN</Language>
               <SearchContainer>
                   <Input/>
                   <Search />
               </SearchContainer>
            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
            </Wrapper> 
        </Container>
    );
}

export default Navbar;