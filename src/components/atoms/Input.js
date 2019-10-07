import styled from 'styled-components';
import InputBar from './InputBar';
import Label from './Label';
import Colors from '../../styled/Colors';

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

    & ~ ${InputBar} {
      background: ${Colors.blueDark};
    }
    & + ${Label} {
      top: -20px;
      font-size: 0.65rem;
    }
  }
`;

export default Input;
