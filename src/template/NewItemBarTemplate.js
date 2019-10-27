import React, { useContext } from 'react';
import AppContext from 'context/AppContext';
import BarContext from 'context/BarContext';
import styled from 'styled-components';
import { newItemBarOnAnimation, newItemBarOffAnimation } from 'styled/animations';
import { colorWithOpacity, white, grey, red } from 'styled/colors';
import closeIcon from 'assets/icons/close.svg';
import Button from 'components/Button';
import FormTemplate from './FormTemplate';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  min-height: 700px;
  width: ${({ formType }) => (formType === 'firm' ? `650px` : `550px`)};
  background-color: ${colorWithOpacity(white, 0.95)};
  z-index: 5;
  padding: ${({ formType }) => (formType === 'firm' ? `100px 50px 0px` : `200px 25px 0px`)};
  box-shadow: -10px 0px 10px 1px ${colorWithOpacity(grey, 0.5)};
  animation: ${({ animation }) => (animation ? newItemBarOnAnimation : newItemBarOffAnimation)} 0.4s ease-in-out forwards;
`;

const CloseButton = styled(Button)`
  left: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-width: 3px;
`;

function NewItemBarTemplate() {
  const { formType, closeNewItemBar } = useContext(AppContext);
  const { newItemBarIsVisibility, newItemBarAnimation } = useContext(BarContext);

  return (
    newItemBarIsVisibility && (
      <Wrapper animation={newItemBarAnimation} formType={formType}>
        <FormTemplate />
        <CloseButton onClick={closeNewItemBar} icon={closeIcon} buttonColor={red} />
      </Wrapper>
    )
  );
}

export default NewItemBarTemplate;
