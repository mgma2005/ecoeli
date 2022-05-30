import styled from "styled-components";
import React from "react";
import cont




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

const F = styled.div`
    display: flex;
    font-size: 2vw;
    margin-left: 3%;
  
`;

var d = new Date();


const Announcement = () => {
  
  return (
<div>

  contact<ContactMail/>
</div>
    <Text>
         <F>{(d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear())}</F>
          Wellcome to Miss Argentina...
        <P>
          the most beautifull footwear ever!
        </P>
    </Text>
    
  )
} 

export default Announcement
