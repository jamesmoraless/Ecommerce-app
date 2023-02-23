import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})}
`;
const Title = styled.h1`
text-align: center;
font-weight: 200;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const TopButton = styled.button`
font-weight: 600;
padding: 10px;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"}


`;
const TopTexts = styled.div`
${mobile({display: "none"})}

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;


const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`;
const ProdDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`
width: 200px;
${mobile({width: "40%"})}

`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span`
`;

const ProductId = styled.span`
`;
const ProductSize = styled.span`
`;
const PriceDetail = styled.div`
flex: 1;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`;
const AmountContainer = styled.div`
margin-bottom: 20px;
align-items: center;
display:flex;
${mobile({margin: "10px 15px"})}
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;
const Summary = styled.div`
flex: 1;
border: 1px solid black;
padding: 20px;
border-radius: 10px;
height: 50vh;
`;
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;
const SumTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;
const SumText = styled.div`
`;
const SumPrice = styled.div`
`;
const SumButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight 600;
cursor: pointer;

`;
export default function Cart() {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top>
            <TopButton>CONTIUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>My Wishlist</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>


          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProdDetail>
                  <Image src="https://i.postimg.cc/v84y8SG1/Couple-models.jpg" />
                  <Details>
                    <ProductName><b>Product: </b>Dress thunder </ProductName>
                    <ProductId><b>ID: </b>345152542352 </ProductId>
                    <ProductSize><b>Size: </b> 37.5</ProductSize>


                  </Details>
                </ProdDetail>
                <PriceDetail>
                  <AmountContainer>
                    <RemoveCircleIcon />
                  </AmountContainer>
                  <ProductPrice>$ 25</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProdDetail>
                  <Image src="https://i.postimg.cc/v84y8SG1/Couple-models.jpg" />
                  <Details>
                    <ProductName><b>Product: </b>Dress thunder </ProductName>
                    <ProductId><b>ID: </b>345152542352 </ProductId>
                    <ProductSize><b>Size: </b> 37.5</ProductSize>


                  </Details>
                </ProdDetail>
                <PriceDetail>
                  <AmountContainer>
                    <RemoveCircleIcon />
                  </AmountContainer>
                  <ProductPrice>$ 25</ProductPrice>
                </PriceDetail>
              </Product>
              </Info>
            
            <Summary>
              <SumTitle>ORDER SUMMARY</SumTitle>
              
              <SummaryItem>
                <SumText>
                  Subtotal
                </SumText>
                <SumPrice>
                  $ 80.90
                </SumPrice>
              </SummaryItem>

              <SummaryItem>
                <SumText>
                  Discount
                </SumText>
                <SumPrice>
                  $ -5.90
                </SumPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SumText >
                  Total
                </SumText>
                <SumPrice>
                  $ 61
                </SumPrice>
              </SummaryItem>
              <SumButton>CHECKOUT NOW</SumButton>
            
            </Summary>

          </Bottom>
          
        </Wrapper>
         
        <Footer />
      
    </Container>
  )
}
