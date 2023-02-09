import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 4px;
  padding: 10px 14px;
  outline: none;
  border: none;
  width: 100%;
`;
