import styled from '@emotion/styled'
import React from 'react'
import ReactDom from 'react-dom'
import { colors } from '../styles/colors'


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const CustomAlert = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 20px;
`;

const CustomButton = styled.button`
  background-color: ${ colors.orange};
  color: white;
  border-radius: 20px;
  border: none;
  padding: 5px 25px;
  &:hover {
    background-color: 'orange'; 
  }
  cursor: pointer;
`;


export default function ReviewModal({ open, onClose, product }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <CustomAlert style={MODAL_STYLES}>
        <div>
                <img src={product.imagen} alt={product.description} />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>Description:</p>
                <p>
                    {product.description}
                </p>
            </div>
        <CustomButton green onClick={onClose}>Go Back!</CustomButton>
      </CustomAlert>
    </>,
    document.getElementById('portal')
  )
}