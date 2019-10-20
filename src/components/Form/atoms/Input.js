import styled from 'styled-components';
import Bar from 'components/Form/atoms/Bar';
import Label from 'components/Form/atoms/Label';
import { blueDark } from 'styled/colors';

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
