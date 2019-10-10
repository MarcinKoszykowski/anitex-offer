import React, { useContext } from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import colors from 'styled/colors';
import FormTemplate from 'template/FormTemplate';
import Button from 'components/atoms/Button';
import closeIcon from 'assets/icons/close.svg';
import animations from 'styled/animations';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  min-height: 700px;
  width: ${({ formType }) => (formType === 'firm' ? `650px` : `550px`)};
  background-color: ${colors.colorWithOpacity(colors.white, 0.95)};
  z-index: 5;
  padding: ${({ formType }) => (formType === 'firm' ? `100px 50px 0px` : `200px 25px 0px`)};
  box-shadow: -10px 0px 10px 1px ${colors.colorWithOpacity(colors.grey, 0.5)};
  animation: ${({ animation }) =>
      animation ? animations.newItemBarOnAnimation : animations.newItemBarOffAnimation}
    0.4s ease-in-out forwards;
`;

const CloseButton = styled(Button)`
  left: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-width: 3px;
`;

function NewItemBarTemplate() {
  const { newItemBarIsVisible, formType, closeNewItemBar, newItemBarAnimation } = useContext(
    AppContext,
  );

  return (
    newItemBarIsVisible && (
      <Wrapper animation={newItemBarAnimation} formType={formType}>
        <FormTemplate />
        <CloseButton onClick={closeNewItemBar} icon={closeIcon} buttonColor={colors.red} />
      </Wrapper>
    )
  );
}

export default NewItemBarTemplate;
