import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: #77DE79;
color: black;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 550;
`;

export default function Announcement() {
  return (
    <Container> 
        Super Deal! Get your St.Paddy's Day Merch Now!
    </Container>
  )
}
