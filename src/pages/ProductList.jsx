import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`
`;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 10px;
`;
const Select = styled.select`
padding: 5px;
margin-right: 20px;
cursor: pointer;
`;
const Option = styled.option`
`;

export default function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Brown</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>Small</Option>
                <Option>Medium</Option>
                <Option>Large</Option>
                <Option>X-Large</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>
                    Newest
                </Option>
                <Option>Price ($ to $$)</Option>
                <Option>Price ($$ to $)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}
