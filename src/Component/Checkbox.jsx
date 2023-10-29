// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Checkbox = ({ type }) => {
    return (
        <CheckboxStyle type={type}></CheckboxStyle>
    );
};
const CheckboxStyle = styled.input`
  background-color: #eee;
  font-size: 14px;
`
export default Checkbox;