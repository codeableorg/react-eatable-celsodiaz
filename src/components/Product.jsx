import styled from '@emotion/styled';
import { colors } from '../styles/colors';

const ProductContainer = styled.li`
  list-style: none;
  background-color: white; 
  padding: 20px;
  padding-top: 100px ;
  margin-top: 80px;
  text-align: center;
  border-radius: 35px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  position: relative; 
  
`;

const ProductImage = styled.img`
  border-radius: 50%; 
  display: block;
  margin: 0 auto;
  position: absolute; 
  top: -25%; 
  right: 0;
  width: 88%; 
  height: 57%; 
  object-fit: cover;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4); 
`;

const ProductName = styled.p`
  text-transform: capitalize; 
  font-weight: bold; 
`;

const ProductPrice = styled.p`
  font-weight: bold; 
  color: ${colors.orange}; 
`;

const Product = ({ product }) => {
  const formattedPrice = `$${(product.price / 100).toFixed(2)}`;

  return (
    <ProductContainer>
      <ProductImage src={product.imagen} alt={product.description} />
      <div>
        <ProductName>{product.name}</ProductName>
      <ProductPrice>{formattedPrice}</ProductPrice>
      <button>Edit</button>
      </div>
      <button>Delete</button>
    </ProductContainer>
  );
};

export default Product;

