import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
//background: linear-gradient(rgba((255,255,255,0.5), rgba((255,255,255,0.5)), url("https://i.postimg.cc/2yRZ6LL3/Nike-top-model.jpg") center;
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: gray;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
display: flex;
justify-content: center;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 10px 0px 0px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
font-weight: 500;
cursor: pointer;
margin: 10px 0px;
`;
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`;


export default function Login() {
  return (
    <Container>
        <Wrapper>
        <Title>WELCOME BACK</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>Forgot Passowrd?</Link>
                <Link>Create New Account</Link>
            </Form>
        </Wrapper>
      
    </Container>
  )
}
