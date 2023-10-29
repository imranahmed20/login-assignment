// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Button = ({ content }) => {
    return (
        <StyleButton>{content}</StyleButton>
    );
};
const StyleButton = styled.button`
  background-color: #1575A7;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  align-items: center;
  width: 538px;
  height: 56px;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
`

export default Button;