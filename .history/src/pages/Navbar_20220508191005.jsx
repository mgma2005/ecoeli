import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
height: 60px;

`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;

`

const Left = styled.div`
width: 33
`
const Center = styled.div``
const Right = styled.div``

function Navbar() {
    return (
        <Container>
            <Wrapper>
            <Left>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nobis neque quae earum alias consequuntur quidem ipsam at 
                 velit sint nulla odit in officia a enim, esse illo voluptas 
                 magni autem.
            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
            </Wrapper> 
        </Container>
    );
}

export default Navbar;