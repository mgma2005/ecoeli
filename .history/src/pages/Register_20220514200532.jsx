import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://s1.eestatic.com/2022/04/05/curiosidades/mascotas/662693868_223268742_1024x576.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;

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
