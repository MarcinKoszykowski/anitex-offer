import styled, { css } from 'styled-components';
import colors from 'styled/colors';

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({ buttonColor }) => buttonColor};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  box-shadow: 0 0 5px 2px ${colors.grey};
  border: 5px solid ${({ buttonColor }) => buttonColor};
  transition: border 0.3s, background-color 0.3s, opacity 0.3s;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:active {
        opacity: 0.8;
      }
      &:hover {
        background-color: transparent;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: auto;
      opacity: 0.5;
    `}
`;

export default Button;
