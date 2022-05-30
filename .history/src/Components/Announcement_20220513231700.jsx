import styled from "styled-components";
import React from "react";

const Text = styled.div`
  font-size: 40px;
  text-align: center;
  background-image: url("  background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
  ");

  
`

const P = styled.div`
  font-size: 3vw;
`


const Announcement = () => {
  return (
    <Text>
          Wellcome to Miss Argentina...
        <P>
          the most beautifull footwear ever!
        </P>
    </Text>
  )
} 

export default Announcement
