import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
//background: linear-gradient(rgba((255,255,255,0.5), rgba((255,255,255,0.5)), url("https://i.postimg.cc/2yRZ6LL3/Nike-top-model.jpg") center;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: gray;
${mobile({width: "75%"})}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
display: flex;
justify-content: center;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
font-weight: 500;
`;


export default function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/> 
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>By creating an account, I consent to the processing
                    of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}
