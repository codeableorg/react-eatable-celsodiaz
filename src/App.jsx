import React from "react";
// import { deleteProduct, editProduct, getProducts } from "./services/products-service";
import Container from "./components/Container";
import ProductsList from "./components/ProductsList";
import styled from "@emotion/styled";
import { colors } from "./styles/colors";
import { Link } from "react-router-dom";


const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #eeecec;
  padding: 15px 0;
  font-weight: bolder;
  font-size: 1.75em;
  z-index: 1; 
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #eeecec;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const linkStyle = {
  textDecoration: "none", 
  color: "inherit", 
};

const CustomButtonCreate = styled.button`
  background-color: ${colors.orange};
  color: white;
  border-radius: 20px;
  border: none;
  padding: 5px 85px;
  &:hover {
    background-color: orange; 
  }
  cursor: pointer;
`;
function App() {

  return (
    <Container>
      <FixedHeader>Products Dashboard</FixedHeader>
      <ProductsList />
      <Footer>
        <CustomButtonCreate>
          <Link to="/create" style={linkStyle}>Create Product</Link>
        </CustomButtonCreate>
      </Footer>
    </Container>
  );
}

export default App;