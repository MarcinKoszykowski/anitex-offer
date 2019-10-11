import React, { useContext } from 'react';
import AppContext from 'context';
import styled, { css } from 'styled-components';
import logoImg from 'assets/images/anitex.png';
import { white, grey } from 'styled/colors';
import Firm from 'components/organisms/Firm';
import Info from 'components/organisms/Info';
import Edit from 'components/molecules/Edit';
import Products from 'components/organisms/Products';

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

const Logo = styled.img`
  height: 65px;
  margin: ${({ print }) => (print ? `40px 0 30px` : `0 0 30px`)};
`;

const FirmWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px dashed ${grey};
`;

function PageTemplate() {
  const { print, reference, firm } = useContext(AppContext);
  const { firm1 } = firm;

  return (
    <Wrapper print={print} ref={reference}>
      <Logo print={print} src={logoImg} />
      <FirmWrapper>
        <Firm anitex />
        <Firm />
        <Edit type="firm" value={firm1} />
      </FirmWrapper>
      <Info />
      <Products />
    </Wrapper>
  );
}

export default PageTemplate;
