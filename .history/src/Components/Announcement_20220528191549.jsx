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
       <div id="myimageDiv" style="display:none">  </div>
       <script type="text/javascript"> <!-- function showHide(){ ImageDiv=document.getElementById('myimageDiv') //set display to inline if currently none, otherwise to none oImageDiv.style.display=(oImageDiv.style.display=='none')?'inline':'none' } </script>
      <Button >
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
