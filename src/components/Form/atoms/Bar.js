import styled from 'styled-components';
import { colorWithOpacity, blueDark } from 'styled/colors';

const Bar = styled.div`
  width: 100%;
  height: 2.5px;
  margin-top: 1px;
  background: ${colorWithOpacity(blueDark, 0.6)};
  transition: background-color 0.1s;
`;

export default Bar;
