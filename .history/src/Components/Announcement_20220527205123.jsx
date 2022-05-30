import styled from "styled-components";
import React from "react";



const d = new Date();
document.write(d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear());


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
          <div>
          Wellcome to Miss Argentina...
        <P>
          the most beautifull footwear ever!
        </P>
    </Text>
    
  )
} 

export default Announcement
