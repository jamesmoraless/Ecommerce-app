import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from 'styled-components';
import Img from '../assets/home-page-model.png';
import { useState } from "react";
import {sliderItems} from "../data"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
opacity: 0.65;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
z-index: 2;
`;
//if statement is used to indicate right and left props with conditional arrow function
//props are a good feature w components i.e. "left" and "right" 

const Wrapper = styled.div`
height: 100%;
display: flex;
overflow: hidden;
transform: translateX(${(props)=> props.slideIndex * -100}vw);
`;
//contains all slide panels horizontally and cancels any overflow 
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props=> props.bg}
`;
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;
const Image = styled.img`
height: 80%;
margin-left: 10%
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
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
    const [slideIndex, setSlideIndex] = useState(0);//we will use slide arrays (0,1,2 = 3 slides)

    const handleClick = (direction) =>{

        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2);
        }
        else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 : 0);
        }

    }
  
    return (
    <Container>
        <Arrow direction ="left" onCLick={()=>handleClick("left")}>
            <ArrowLeft />
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
            ))}

        </Wrapper>
        <Arrow direction="right" onCLick={()=>handleClick("right")}>
            <ArrowRight />
        </Arrow>
    </Container>
  )
}
