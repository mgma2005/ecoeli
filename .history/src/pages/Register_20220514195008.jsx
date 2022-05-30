import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1342257729.jpg?crop=0.642xw:0.483xh;0.212xw,0.478xh&resize=768:*")
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
