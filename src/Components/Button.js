import styled from "styled-components";

const Button = styled.button.attrs({ type: "button" })`
  height: 33px !important;
  width: 100px;
  padding: 4px;
  font-size: 20px;
  text-align: center;
  background-color: #e79652;
  color: #2b2318;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 0, 0, 0.5);
  outline: none;
  &:hover {
    background-color: #dbda9a;
  }
  &:active {
    background-color: #f1d736;
  }
`;

export default Button;
