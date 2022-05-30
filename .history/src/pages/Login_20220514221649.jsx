import styled from "styled-components";

onst Container = styled.div`
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

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 1.7vw;
  background-color: transparent;
  border: 0.3vw solid black;
`;

const Agreement = styled.span`
  font-size: 2vw;
  margin-top: 5%;
`;

const Button = styled.button`
  margin-top: 5%;
  background-color: lightblue;
  border: none;
  padding: 15px 20px;
  margin-left: 40%;
  cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
         <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username"/>
          <Input placeholder="Password"/>
      
        <Button>LOGIN</Button>
        <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login