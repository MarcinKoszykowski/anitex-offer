import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from 'styled/Colors';
import Button from 'components/atoms/Button';
import closeIcon from 'assets/icons/close.svg';
import withContext from 'hoc/withContext';
import CenterFormTemplate from 'template/CenterFormTemplate';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding-left: 40px;
  top: 100px;
  left: 50%;
  width: 650px;
  height: 100px;
  background-color: ${Colors.white};
  z-index: 5;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px ${Colors.colorWithOpacity(Colors.grey, 0.5)};
  transform: translate(${({ isVisible }) => (isVisible ? `-50%, 0` : `-50%, -300%`)});
  transition: transform 0.5s ease-in;
`;

const CloseButton = styled(Button)`
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-width: 3px;
`;

function CenetrBarTemplate({ context }) {
  const { centerBarIsVisible, closeCenterBar } = context;

  return (
    <Wrapper isVisible={centerBarIsVisible}>
      <CenterFormTemplate />
      <CloseButton onClick={closeCenterBar} icon={closeIcon} buttonColor={Colors.red} />
    </Wrapper>
  );
}

CenetrBarTemplate.propTypes = {
  context: PropTypes.shape({
    centerBarIsVisible: PropTypes.bool.isRequired,
    closeCenterBar: PropTypes.func.isRequired,
  }).isRequired,
};

export default withContext(CenetrBarTemplate);
