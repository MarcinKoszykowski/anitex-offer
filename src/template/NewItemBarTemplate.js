import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from 'styled/Colors';
import FormTemplate from 'template/FormTemplate';
import Button from 'components/atoms/Button';
import closeIcon from 'assets/icons/close.svg';
import withContext from 'hoc/withContext';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  min-height: 700px;
  width: ${({ formType }) => (formType === 'firm' ? `650px` : `550px`)};
  background-color: ${Colors.colorWithOpacity(Colors.white, 0.95)};
  z-index: 5;
  padding: ${({ formType }) => (formType === 'firm' ? `100px 50px 0px` : `200px 25px 0px`)};
  box-shadow: -10px 0px 10px 1px ${Colors.colorWithOpacity(Colors.grey, 0.5)};
  transform: translate(${({ isVisible }) => (isVisible ? `0` : `100%`)});
  transition: transform 0.4s ease-in;
`;

const CloseButton = styled(Button)`
  left: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-width: 3px;
`;

function NewItemBarTemplate({ context }) {
  const { newItemBarIsVisible, formType, closeNewItemBar } = context;

  return (
    <Wrapper isVisible={newItemBarIsVisible} formType={formType}>
      <FormTemplate />
      <CloseButton onClick={closeNewItemBar} icon={closeIcon} buttonColor={Colors.red} />
    </Wrapper>
  );
}

NewItemBarTemplate.propTypes = {
  context: PropTypes.shape({
    newItemBarIsVisible: PropTypes.bool.isRequired,
    formType: PropTypes.string.isRequired,
    closeNewItemBar: PropTypes.func.isRequired,
  }).isRequired,
};

export default withContext(NewItemBarTemplate);
