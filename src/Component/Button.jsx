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
  background-color: blue;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;

`

export default Button;