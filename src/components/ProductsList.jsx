import styled from '@emotion/styled';
import Product from './Product';

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
  list-style: none;
  padding: 35px 0;
  margin-left: 20px;
  margin-right: 20px; 
`;

const ProductsList = ({ products }) => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductsList;
