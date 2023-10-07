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
  padding: 50px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 20px;
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
  background-color: ${(props) => (props.green ? colors.green[500] : colors.orange)};
  color: white;
  border-radius: 20px;
  border: none;
  padding: 5px 25px;
  &:hover {
    background-color: ${(props) =>
      props.green ? 'lightgreen' : 'orange'}; 
  }
  cursor: pointer;
`;

const CustomTitle = styled.h1`
  text-align: center;
`;

const CustomAlertError = styled.div`
 color: red;
`;

export default function Modal({ open, onClose, onRemoveProduct, product , errorMessage}) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <CustomOverlay />
      <CustomAlert>
        <CustomTitle>Are you sure?</CustomTitle>
        <CustomButton onClick={() => onRemoveProduct(product)}>Yes, delete it!</CustomButton>
        <CustomButton green onClick={onClose}>No, Cancel!</CustomButton>
        {errorMessage && <CustomAlertError className="error-message">{errorMessage}</CustomAlertError>}
      </CustomAlert>
    </>,
    document.getElementById('portal')
  );
}