import styled from 'styled-components';
import { blueDark } from 'styled/colors';
import Bar from './Bar';
import Label from './Label';

const Input = styled.input`
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;

  &:not(:placeholder-shown) + ${Label} {
    top: -20px;
    font-size: 0.6rem;
  }

  &:focus {
    outline: none;

    & ~ ${Bar} {
      background: ${blueDark};
    }
    & + ${Label} {
      top: -20px;
      font-size: 0.65rem;
    }
  }
`;

export default Input;
