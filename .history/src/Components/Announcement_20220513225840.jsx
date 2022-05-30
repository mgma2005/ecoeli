import styled from "styled-components";
import React from "react";

const Text = styled.div`
  font-size: 40px;
  text-align: center;
  
`

const P = styled.div`
  font-size: 3vw;
  font-family: cursive
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
