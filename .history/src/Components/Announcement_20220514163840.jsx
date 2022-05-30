import styled from "styled-components";
import React from "react";

const Text = styled.div`
display: flex;
  font-size: 5vw;
  text-align: center;
  background-image: url("https://img.freepik.com/foto-gratis/bandera-argentina-sobre-fondo-blanco_532129-292.jpg?w=900");
  background-size: 20vw;
  background-repeat: no-repeat;
  background-position: center;
  

  
`

const P = styled.div`
  display: flex;
  font-size: 3vw;
`


const H4 = styled.div`
  color: red;
`


const Announcement = () => {
  return (
    <Text>
          Wellcome to <H4>Miss Argentina...</H4>
        <P>
          the most beautifull footwear ever!
        </P>
    </Text>
  )
} 

export default Announcement
