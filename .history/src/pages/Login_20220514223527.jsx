import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://www.podoactiva.com/wp-content/uploads/imagenes/calzado_1.jpg") center;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right;
  
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

const Link = styled.div`
  font-size: 2vw;
  text-align: center;
  
  font-weight: 800;
  color: lightblue;
  -webkit-text-stroke: 2px black;

  `;

const Button = styled.button`
  margin-top: 5%;
  background-color: lightblue;
  border: none;
  padding: 15px 20px;
  margin-left: 43.5%;
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
        <Link>CREATE A NEW ACCOUNT!</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
