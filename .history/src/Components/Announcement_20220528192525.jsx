import styled from "styled-components";
import React from "react";
import { ContactMail,PhonePaused,WhatsApp } from "@material-ui/icons";




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
    
    font-size: 2vw;
    margin-left: 80%;
  
`;

const Button=styled.div`
  margin-left: 80%;
  cursor: pointer;
    
`;


const Sup=styled.div`
  
`;

var d = new Date();


const Announcement = () => {
  
  return (
    <>
    <Text>
        <F>{(d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear())}</F>
       <Sup>
         
      <Button type="button" oncli img src="https://img.freepik.com/foto-gratis/bandera-argentina_1401-57.jpg?w=900&t=st=1653776668~exp=1653777268~hmac=dbdb6438a3d70e61e393ce3b127d03ce566cdbb240e3a5fc3d7207210dbbfadb" height ="40" width="100" />
        <ContactMail />
      </Button>
      <Button>
      <PhonePaused />
      </Button>
      <Button>
      <WhatsApp />
    </Button>
    </Sup>
        Wellcome to Miss Argentina...
        <P>
          the most beautifull footwear ever!
        </P>
      </Text></>
    
  )
} 

export default Announcement
