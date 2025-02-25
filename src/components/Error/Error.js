import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { red } from 'styled/colors';
import { error as errorValue } from 'data/value';
import Text from './atoms/Text';

const Wrapper = styled.div`
  position: absolute;
  top: 140px;
  left: 50%;
  background-color: ${red};
  text-align: center;
  justify-content: center;
  border-radius: 20px;
  padding: 25px 100px;
  transform: ${({ error }) => (error ? `translate(-50%, 0)` : `translate(-50%, -300%)`)};
  transition: transform 0.5s;
`;

const Error = ({ error }) => (
  <Wrapper error={error}>
    <Text>{errorValue}</Text>
  </Wrapper>
);

Error.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default Error;
