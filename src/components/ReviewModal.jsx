import styled from '@emotion/styled';
import React from 'react';
import ReactDOM from 'react-dom';
import { colors } from '../styles/colors';

const CustomAlert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: row; 
  align-items: center;
  gap: 25px;
  border-radius: 20px;
`;

const ProductImage = styled.img`
  border-radius: 50%;
  max-width: 30%; 
  height: auto; 
  object-fit: cover;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
`;

const CustomOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const CustomButton = styled.button`
  position: fixed;
  background-color: ${colors.orange};
  color: white;
  border-radius: 20px;
  border: none;
  padding: 5px 25px;
  &:hover {
    background-color: orange;
  }
  cursor: pointer;
  top: 20px;
  right: 20px;
`;

export default function ReviewModal({ open, onClose, product }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <CustomOverlay />
      <CustomAlert>
        <ProductImage src={product.picture_url} alt={product.description} />
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>Description:</p>
          <p>{product.description}</p>
        </div>
        <CustomButton green onClick={onClose}>
          Go Back!
        </CustomButton>
      </CustomAlert>
    </>,
    document.getElementById('portal')
  );
}