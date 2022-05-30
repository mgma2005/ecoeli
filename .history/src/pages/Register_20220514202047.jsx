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
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: brown;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  font-size: 
`;

const Agreement = styled.span``;

const Button = styled.button``;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name"/>
          <Input placeholder="Last name"/>
          <Input placeholder="Username"/>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
          <Input placeholder="Confirm password"/>
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
