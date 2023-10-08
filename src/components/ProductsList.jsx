import styled from '@emotion/styled';
import Product from './Product';
import { useAuth } from '../context/Product-context';

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
  list-style: none;
  padding:45px 0;
  margin-left: 20px;
  margin-right: 20px; 
`;

const ProductsList = () => {
  const {products} = useAuth();
  return (
    <ProductGrid>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductsList;
