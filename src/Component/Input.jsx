import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder }) => {
    return (
        <StyleInput type={type} placeholder={placeholder}></StyleInput>
    );
};
const StyleInput = styled.input`
background: rgba(255, 255, 255, 0.15);
border-radius: 8px;
width: 100%;
height: 1rem;
padding: 1rem;
color: #3c354e;
font-size: 14px;
font-weight: bold;
margin: 4px;
border: 1px solid black;
`


export default Input;