import styled from "styled-components";
import { popularProducts } from "../data";
import Prod from "./Prod";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export default function Products() {
  return (
    <Container>
      {popularProducts.map(item =>(
        <Prod item={item} key={item.id} />
      ))}
    </Container>
  )
}
