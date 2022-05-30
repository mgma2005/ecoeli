import styled from "styled-components";
import { useState } from "react";
import { Input } from "@material-ui/core";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw0b1f6b31/images/zoom/10040428_3-4_front.jpg?sw=800&sh=800") center;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;

  `;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: transparent;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  text-align: center;
  color: lightblue;
  widht: 100%;
  -webkit-text-stroke: 1px black;
`;

const Button = styled.button`
  margin-top: 5%;
  background-color: lightblue;
  border: none;
  padding: 15px 20px;
  margin-left: 40%;
  cursor: pointer;
`;

const setTitle = styled.div``;


const Register = () => {
  const [setTitle] = useState(0);

  return (
    
    <Container>
      <Wrapper>
        <Title>PAY FORM</Title>
        <Form>
        <Input name="input">input</Input>
        <input onClick={input => setTitle(input.value)}/>
        
        </Form>
      </Wrapper>
    </Container>
  )
}

const id = document.getElementById('root');
id.innerHTML=setTitle;
await(5000);
export default Register;

