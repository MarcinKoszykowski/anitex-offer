import styled, { css } from 'styled-components';

const Name = styled.p`
  margin: 0;
  height: 23px;
  font-size: 1.2rem;
  font-weight: 500;

  ${({ second }) =>
    second &&
    css`
      height: 18px;
      margin-bottom: 3px;
      font-size: 0.9rem;
      font-weight: 400;
    `}
`;

export default Name;
