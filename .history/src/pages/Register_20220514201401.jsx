import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw0b1f6b31/images/zoom/10040428_3-4_front.jpg?sw=800&sh=800");
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  
`;

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
