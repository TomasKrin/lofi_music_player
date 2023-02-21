import styled from "styled-components";
import { primaryButtonColor, secondaryButtonColor } from "../../consts/colors";

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${primaryButtonColor};
  padding: 10px 30px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  white-space: nowrap;
  &:hover {
    background-color: ${secondaryButtonColor};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button = ({ children, ...rest }) => {
  return <PrimaryButton {...rest}>{children}</PrimaryButton>;
};

export default Button;
