import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import Img from '../assets/home-page-model.png';
import { useState } from "react";
import {sliderItems} from "../data"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 45px;
height: 45px;
background-color: #fff7f7;
border-radius: 40%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
opacity: 0.65;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
z-index: 2;
`;
//if statement is used to indicate right and left props with conditional arrow function
//props are a good feature w components i.e. "left" and "right" 

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 2s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`;
//contains all slide panels horizontally and cancels any overflow 
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props=> props.bg};
`;
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;
const Image = styled.img`
height: 80%;
margin-left: 20%;
`
const InfoContainer = styled.div`
flex: 1;
padding: 100px;
`;

const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0); //we will use slide arrays (0,1,2 = 3 slides)
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  
    return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=> (
            <Slide bg={item.bg}>
            <ImgContainer>
                <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title> {item.title} </Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW ME</Button>
            </InfoContainer>
            </Slide>
            ))};
        </Wrapper>

        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  );
};
