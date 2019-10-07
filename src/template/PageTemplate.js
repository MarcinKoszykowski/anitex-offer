import React from 'react';
import styled, { css } from 'styled-components';
import logoImg from 'assets/images/anitex.png';
import Colors from 'styled/Colors';
import Firm from 'components/organisms/Firm';
import Info from 'components/organisms/Info';
import withContext from 'hoc/withContext';
import Edit from 'components/molecules/Edit';
import Products from 'components/organisms/Products';

const Wrapper = styled.div`
  position: relative;
  width: 7in;
  margin: 0 auto;
  text-align: center;
  background-color: ${Colors.white};

  ${({ print }) =>
    !print &&
    css`
      &::after {
        position: absolute;
        content: '';
        background-color: ${Colors.white};
        box-shadow: 0 0 5px 5px ${Colors.grey};
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
  border-bottom: 1px dashed ${Colors.grey};
`;

function PageTemplate({ context }) {
  const { print, reference, firm, openNewItemBar, login } = context;

  return (
    <Wrapper print={print} ref={reference}>
      <Logo print={print} src={logoImg} />
      <FirmWrapper>
        <Firm anitex />
        <Firm firm={firm} />
        <Edit
          type="firm"
          editButtonOnClick={openNewItemBar}
          login={login}
          print={print}
          value={firm.firm1}
        />
      </FirmWrapper>
      <Info />
      <Products />
    </Wrapper>
  );
}

export default withContext(PageTemplate);
