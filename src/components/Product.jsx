import styled from '@emotion/styled';
import { colors } from '../styles/colors';
import { useState } from 'react';
import Modal from './Modal';
import ReviewModal from './ReviewModal';

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
  left: 0;
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

const Product = ({ product,onRemoveProduct,errorMessage }) => {
  const formattedPrice = `$${(product.price / 100).toFixed(2)}`;
  const [isOpen, setIsOpen] = useState(false);
  const [open,setOpen] = useState(false);

  return (
    <ProductContainer >

      <div>
        <ProductImage src={product.imagen} alt={product.description} onClick={() => setOpen(true)} />
        <ReviewModal open={open} onClose={() => setOpen(false)} product={product}/>
      </div>

      <div>
        <ProductName>{product.name}</ProductName>
      <ProductPrice>{formattedPrice}</ProductPrice>
      
      </div>
      <div>
        <button>Edit</button>
      </div>

      <div>
       <button onClick={() => setIsOpen(true)}>Delete</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)} errorMessage={errorMessage} onRemoveProduct={onRemoveProduct} product={product}/>
      </div>
    </ProductContainer>
  );
};

export default Product;

