import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
height: 60px;

`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`




const Center = styled.div`

text-align: center;
font-size: 5vw;
font-weight: bold;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
            
            <Center>VAMP</Center>
            <p>DEVELOPING</p>
           
            </Wrapper> 
        </Container>
    );
}

export default Navbar;