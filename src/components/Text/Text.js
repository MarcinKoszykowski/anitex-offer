import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Index from 'components/Text/atoms/Index';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-column-gap: 8px;

  ${({ info }) =>
    info &&
    css`
      grid-template-columns: 2fr 6.7fr;
      margin: 3px 0;
    `}
`;

const Text = ({ info, index, text }) => (
  <Wrapper info={info}>
    <Index>{index}</Index>
    <p>{text}</p>
  </Wrapper>
);

Text.propTypes = {
  info: PropTypes.bool,
  index: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Text.defaultProps = {
  info: false,
};

export default Text;
