import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/Navigation/Navigation';

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 200px;
  bottom: 0;
`;

const NavigationTemplate = () => (
  <Wrapper>
    <Navigation />
  </Wrapper>
);

export default NavigationTemplate;
