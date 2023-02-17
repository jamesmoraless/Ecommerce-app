import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

//Styled components vs using CSS: installed a styled-components library
const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
border-radius: 8px;
`

const Input = styled.input`
border: none;
`
const Center = styled.div`
flex: 1;
`

const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex: 1;
`


export default function Navbar() {
  return (
    <Container>
        <Wrapper>
          
          <Left>
            <Language>
              EN
            </Language>
            <SearchContainer>
              <Input /> 
              <SearchIcon /> 

            </SearchContainer>
          </Left>

          <Center>
            <Logo />
            
          </Center>

          <Right>
            Right
          </Right>
        </Wrapper>
    </Container>
  )
}
