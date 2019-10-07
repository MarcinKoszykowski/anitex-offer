import styled from 'styled-components';
import Checkmark from './Checkmark';
import Colors from '../../styled/Colors';

const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 10px 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;

  & ${Checkmark}:after {
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid ${Colors.white};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ ${Checkmark} {
      background-color: ${Colors.red};
      &:after {
        display: block;
      }
    }
  }

  &:hover input ~ ${Checkmark} {
    background-color: ${Colors.pink};
  }
`;

export default CheckboxLabel;
