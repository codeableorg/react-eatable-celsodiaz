import { useState } from "react"
import { getProducts } from "./services/products-service";
import { useEffect } from "react";
import Container from "./components/Container";
import ProductsList from "./components/ProductsList";
import styled from "@emotion/styled";

function parseProducts(products) {
  return products.map((product) => parseProduct(product));
}
function parseProduct(product) {
  // console.log(product);
  const {id,name,price,category,description,picture_url} = product;
  return {
		id,
    name,
    price,
    category,
    description,
    imagen: picture_url,
  };
}

const CustomTitle = styled.h1`
  padding-top: 40px;
  font-weight: bolder;
  font-size: 1.5em;
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
   <CustomTitle>Products Dashboard</CustomTitle>
   <button>Create Product</button>
   <ProductsList products={products}/>
   </Container>
  )
}

export default App
