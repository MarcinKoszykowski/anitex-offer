import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context/AppContext';
import BarContext from 'context/BarContext';
import { colorWithOpacity, white, grey, red } from 'styled/colors';
import { centerBarOnAnimation, centerBarOffAnimation } from 'styled/animations';
import closeIcon from 'assets/icons/close.svg';
import Button from 'components/Button';
import CenterFormTemplate from './CenterFormTemplate';

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

const CenetrBarTemplate = () => {
  const { closeCenterBar } = useContext(AppContext);
  const { centerBarIsVisibility, centerBarAnimation } = useContext(BarContext);

  return (
    centerBarIsVisibility && (
      <Wrapper animation={centerBarAnimation}>
        <CenterFormTemplate />
        <CloseButton onClick={closeCenterBar} icon={closeIcon} buttonColor={red} />
      </Wrapper>
    )
  );
};

export default CenetrBarTemplate;
