import React from 'react';
import styled, { css } from 'styled-components';

const Index = styled.p`
  font-weight: 500;
  margin-right: 8px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;

  ${({ info }) =>
    info &&
    css`
      grid-template-columns: 2fr 6.7fr;
      margin: 3px 0;
    `}
`;

const Text = ({ info, index, text }) => (
  <Wrapper info={info}>
    <Index>{index}</Index>
    <p>{text}</p>
  </Wrapper>
);

export default Text;
