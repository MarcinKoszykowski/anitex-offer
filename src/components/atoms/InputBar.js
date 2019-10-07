import styled from 'styled-components';
import Colors from '../../styled/Colors';

const InputBar = styled.div`
  width: 100%;
  height: 2.5px;
  margin-top: 1px;
  background: ${Colors.colorWithOpacity(Colors.blueDark, 0.6)};
  transition: background-color 0.1s;
`;

export default InputBar;
