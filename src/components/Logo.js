import styled from 'styled-components';

const Logo = styled.img`
  height: 65px;
  margin: ${({ print }) => (print ? `40px 0 30px` : `0 0 30px`)};
`;

export default Logo;
