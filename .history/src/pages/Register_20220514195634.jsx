import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://calzadosbatistella.com.ar/shop/79945-superlarge_default/pantubotas-de-tela-en-suela.jpg"), center;
  background size: fit;
  
`;

const Wrapper = styled.div``;

const Form = styled.form``;

const Title = styled.h1``;

const Input = styled.input``;

const Agreement = styled.span``;

const Button = styled.button``;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <input placeholder="Name"/>
          <input placeholder="Last name"/>
          <input placeholder="Username"/>
          <input placeholder="Email"/>
          <input placeholder="Password"/>
          <input placeholder="Confirm password"/>
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

export default App;
