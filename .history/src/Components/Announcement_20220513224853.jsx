import styled from "styled-components";
import React from "react";

const Text = styled.div`
  font-size: 40px;
  text-align: center;
  background-image: url:"./img/arg1.png";
`

const Announcement = () => {
  return (
    <Text>
          Wellcome to Miss Argentina...
    </Text>
  )
} 

export default Announcement
