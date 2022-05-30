import styled from "styled-components";
import React from "react";
//import Announcement from "../pages/Announcement";

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
  font-size: 3vw;
`

const Mi = 


const Announcement = () => {
  return (
    <Text>
          Wellcome to <Mi>Miss Argentina...</Mi>
        <P>
          the most beautifull footwear ever!
        </P>
    </Text>
  )
} 

export default Announcement
