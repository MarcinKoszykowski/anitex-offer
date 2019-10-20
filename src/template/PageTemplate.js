import React, { useContext } from 'react';
import AppContext from 'context';
import styled, { css } from 'styled-components';
import logoImg from 'assets/images/anitex.png';
import { white, grey } from 'styled/colors';
import Info from 'template/InfoTemplate';
import Product from 'template/ProductTemplate';
import Firm from 'template/FirmTemplate';
import Logo from 'components/Logo';

const Wrapper = styled.div`
  position: relative;
  width: 7in;
  margin: 0 auto;
  text-align: center;
  background-color: ${white};

  ${({ print }) =>
    !print &&
    css`
      &::after {
        position: absolute;
        content: '';
        background-color: ${white};
        box-shadow: 0 0 5px 5px ${grey};
        border-radius: 15px;
        top: -10px;
        bottom: -10px;
        left: -10px;
        right: -10px;
        z-index: -1;
      }
    `}
`;

function PageTemplate() {
  const { print, reference } = useContext(AppContext);

  return (
    <Wrapper print={print} ref={reference}>
      <Logo print={print} src={logoImg} />
      <Firm />
      <Info />
      <Product />
    </Wrapper>
  );
}

export default PageTemplate;
