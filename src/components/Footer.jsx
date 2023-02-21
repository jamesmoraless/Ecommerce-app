import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Container = styled.div`
display: flex;
background-color: white;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1`
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.p`
display: flex;
`;
const SocialIcon = styled.p`
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 10px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title= styled.h3`
margin-bottom: 25px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>James' Site</Logo>
        <Desc>Welcome. This is my thrift business. 
            I collect and gather the best pieces 
            from all around and deliver it straight to 
            you! I hope you enjoy.
        </Desc>
        <SocialContainer>
            <SocialIcon>
                <FacebookIcon />
            </SocialIcon>
            
            <SocialIcon>
                <InstagramIcon />
            </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links:</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Apparel</ListItem>
            <ListItem>Woman's Apparel</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            217 Sarnia Rd. London, Ontario Canada
        </ContactItem>
        <ContactItem>
            +1 (519)-817-9957
        </ContactItem>
        <ContactItem>
            jamesmoraless18@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}
