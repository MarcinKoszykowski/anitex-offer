import React, { useContext } from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white, grey, red } from 'styled/colors';
import Button from 'components/atoms/Button';
import closeIcon from 'assets/icons/close.svg';
import CenterFormTemplate from 'template/CenterFormTemplate';
import { centerBarOnAnimation, centerBarOffAnimation } from 'styled/animations';
import AppContext from 'context';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding-left: 40px;
  top: 100px;
  left: 50%;
  width: 650px;
  height: 100px;
  background-color: ${white};
  z-index: 5;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px ${colorWithOpacity(grey, 0.5)};
  animation: ${({ animation }) => (animation ? centerBarOnAnimation : centerBarOffAnimation)} 0.5s ease-in-out forwards;
`;

const CloseButton = styled(Button)`
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-width: 3px;
`;

function CenetrBarTemplate() {
  const { centerBarIsVisibility, closeCenterBar, centerBarAnimation } = useContext(AppContext);

  return (
    centerBarIsVisibility && (
      <Wrapper animation={centerBarAnimation}>
        <CenterFormTemplate />
        <CloseButton onClick={closeCenterBar} icon={closeIcon} buttonColor={red} />
      </Wrapper>
    )
  );
}

export default CenetrBarTemplate;
