import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
height: 60px;

`

const Wrapper = styled.div`


`




const Center = styled.div`
margin-top: 5%
text-align: center;
font-size: 5vw;
font-weight: bold;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
            
            <Center>VAMP</Center>
            
           
            </Wrapper> 
        </Container>
    );
}

export default Navbar;