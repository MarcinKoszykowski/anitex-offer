import React from 'react';
import styled from 'styled-components';
import { red } from 'styled/colors';
import { firefox } from 'data/value';
import ErrorText from 'components/atoms/ErrorText';

const Wrapper = styled.div`
  position: absolute;
  top: 500px;
  width: 1300px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${red};
  text-align: center;
  border-radius: 15px;
  padding: 20px;
`;

const StyledErrorText = styled(ErrorText)`
  font-size: 1.8rem;
  letter-spacing: 1px;
  text-transform: none;
`;

const Firefox = () => (
  <Wrapper>
    <StyledErrorText>{firefox}</StyledErrorText>
  </Wrapper>
);

export default Firefox;
