// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Label = ({ text }) => {
    return (
        <StyleLebel>{text}</StyleLebel>
    );
};
const StyleLebel = styled.label`
display: block;
color: black;
background: #ffffff;
margin-bottom: 10px;
margin-top: 10px;
font-size: 18px;
font-weight: bold;

`
export default Label;