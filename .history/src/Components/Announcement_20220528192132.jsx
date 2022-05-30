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
         
      <Button type="button"> <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wiktionary.org%2Fwiki%2Fgato&psig=AOvVaw21kl-Fseidr3qK-Egy702h&ust=1653862872770000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjtw7qdg_gCFQAAAAAdAAAAABAD" height ="80" width="100" />
 >
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
