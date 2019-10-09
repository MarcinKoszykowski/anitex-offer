import styled from 'styled-components';
import colors from 'styled/colors';

const InputBar = styled.div`
  width: 100%;
  height: 2.5px;
  margin-top: 1px;
  background: ${colors.colorWithOpacity(colors.blueDark, 0.6)};
  transition: background-color 0.1s;
`;

export default InputBar;
