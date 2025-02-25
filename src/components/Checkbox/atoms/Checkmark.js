import styled from 'styled-components';
import { greyLight } from 'styled/colors';

const Checkmark = styled.span`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${greyLight};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export default Checkmark;
