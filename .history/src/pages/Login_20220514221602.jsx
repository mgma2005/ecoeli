import styled from "styled-components";

const Container = styled.div`

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
