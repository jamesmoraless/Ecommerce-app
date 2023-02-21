import styled from "styled-components"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Info = styled.div`
opacity: 0;
background-color: rgba(0,0,0,0.2);
width: 100%;
height: 100%;
position: absolute;
top: 0;
bottom: 0;
z-Index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #CFCFCF;
position: relative;

&:hover ${Info}{
opacity:1;
}

`;

const Image = styled.img`
height: 75%;
z-index: 2;

`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items:center;
justify-content: center;
margin: 10px;
transition: all 0.3s ease;
&:hover{
    background-color: #e9f5f5;
    transform: scale(1.2);
}
`;

export default function Prod({item}) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
            <ShoppingCartIcon />
        </Icon>
        <Icon>
            <SearchIcon />
        </Icon>
        <Icon>
            <FavoriteIcon />
        </Icon>
      </Info>
    </Container>
  )
}
