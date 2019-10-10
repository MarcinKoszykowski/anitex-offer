import React from 'react';
import styled from 'styled-components';
import NavigationButtons from 'components/molecules/NavigationButtons';

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 200px;
  bottom: 0;
`;

const Navigation = () => (
  <Wrapper>
    <NavigationButtons />
  </Wrapper>
);

export default Navigation;
