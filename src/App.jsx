import React, { useState, useEffect } from "react";
import { deleteProduct, getProducts } from "./services/products-service";
import Container from "./components/Container";
import ProductsList from "./components/ProductsList";
import styled from "@emotion/styled";
import { colors } from "./styles/colors";
import { Link } from "react-router-dom";

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
  const [products, setProducts] = useState([]);

  function handleDeleteProduct(product) {
    const productFind = products.find(
      (productFind) => productFind.name === product.name
    );
    deleteProduct(productFind.id).then(() => {
      const newProducts = products.filter(
        (productDelete) => productDelete.name != product.name
      );
      setProducts(newProducts);
    });
  }

  useEffect(() => {
    getProducts()
      .then((data) => {
        const parsedProducts = parseProducts(data);
        setProducts(parsedProducts);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, [products]);

  return (
    <Container>
      <FixedHeader>Products Dashboard</FixedHeader>
      <ProductsList products={products} onRemoveProduct={handleDeleteProduct}/>
      <Footer>
        <Link to="/create">Create Product</Link>
      </Footer>
    </Container>
  );
}

export default App;