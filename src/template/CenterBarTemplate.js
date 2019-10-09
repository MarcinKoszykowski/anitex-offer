import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'styled/colors';
import Button from 'components/atoms/Button';
import closeIcon from 'assets/icons/close.svg';
import withContext from 'hoc/withContext';
import CenterFormTemplate from 'template/CenterFormTemplate';
import animations from 'styled/animations';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding-left: 40px;
  top: 100px;
  left: 50%;
  width: 650px;
  height: 100px;
  background-color: ${colors.white};
  z-index: 5;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px ${colors.colorWithOpacity(colors.grey, 0.5)};
  animation: ${({ animation }) =>
      animation ? animations.centerBarOnAnimation : animations.centerBarOffAnimation}
    0.5s ease-in-out forwards;
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
  const { centerBarIsVisible, closeCenterBar, centerBarAnimation } = context;

  return (
    centerBarIsVisible && (
      <Wrapper animation={centerBarAnimation}>
        <CenterFormTemplate />
        <CloseButton onClick={closeCenterBar} icon={closeIcon} buttonColor={colors.red} />
      </Wrapper>
    )
  );
}

CenetrBarTemplate.propTypes = {
  context: PropTypes.shape({
    centerBarIsVisible: PropTypes.bool.isRequired,
    closeCenterBar: PropTypes.func.isRequired,
    centerBarAnimation: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withContext(CenetrBarTemplate);
