import styled from "styled-components";
import React from "react";



var D = new Date();
document.write(.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());


const Text = styled.div`
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

const Announcement = () => {
  return (
  
    <Text>
          <D/>
          Wellcome to Miss Argentina...
        <P>
          the most beautifull footwear ever!
        </P>
    </Text>
    
  )
} 

export default Announcement
