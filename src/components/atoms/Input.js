import styled from 'styled-components';
import InputBar from 'components/atoms/InputBar';
import Label from 'components/atoms/Label';
import colors from 'styled/colors';

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
      background: ${colors.blueDark};
    }
    & + ${Label} {
      top: -20px;
      font-size: 0.65rem;
    }
  }
`;

export default Input;
