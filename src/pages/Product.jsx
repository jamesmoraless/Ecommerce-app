import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`
`;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection: "column", padding: "10px"})}
`;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}
`;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding: "0px 10px", marginBottom: "25px"})}
`;
const Title = styled.h1`
font-weight: 300;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;
const AddContainer = styled.div`
margin: 20px 0px;
`;
const Button = styled.button`
background-color: white;
padding: 10px;
border: 2px solid black;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #77DE79
}
`;

export default function Product() {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.postimg.cc/BZLpn2kZ/Levis-bottom-model.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>Levis Jeans</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat incidunt illum autem consequuntur voluptatem recusandae, 
                    tempora pariatur sint! Hic quae ipsum ipsa fuga minus. 
                    Veritatis suscipit ab molestiae dolore quae!</Desc>
                <Price>$ 20.00</Price>
                <AddContainer>
                <Button>ADD TO CART</Button>
                </AddContainer>
                
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      
    </Container>
  )
}
