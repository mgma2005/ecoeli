import styled from "styled-components";

const Container = styled.div`

`;

const Login = () => {
  return (
    <Container>
         <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="User name"/>
          <Input placeholder="Password"/>
        
        <Agreement>
          By creating an account, I concent to the proccesing
          of my personal data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
