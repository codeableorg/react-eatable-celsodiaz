import React, { useState, useEffect } from "react";
import { getProducts } from "./services/products-service";
import Container from "./components/Container";
import ProductsList from "./components/ProductsList";
import styled from "@emotion/styled";

function parseProducts(products) {
  return products.map((product) => parseProduct(product));
}

function parseProduct(product) {
  const { id, name, price, category, description, picture_url } = product;
  return {
    id,
    name,
    price,
    category,
    description,
    imagen: picture_url,
  };
}

const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #eeecec;
  padding: 15px 0;
  font-weight: bolder;
  font-size: 1.5em;
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

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const parsedProducts = parseProducts(data);
        setProducts(parsedProducts);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  return (
    <Container>
      <FixedHeader>Products Dashboard</FixedHeader>
      <ProductsList products={products} />
      <Footer>
        <button>Create Product</button>
      </Footer>
    </Container>
  );
}

export default App;