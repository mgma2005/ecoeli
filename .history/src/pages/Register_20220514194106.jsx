import styled from "styled-components";


const Container = styled.div`

`;

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
        </Form>
      </Wrapper>
    </Container>
  )
}

export default App;
