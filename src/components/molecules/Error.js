import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from 'styled/Colors';
import { error as errorValue } from 'data/Value';
import ErrorText from 'components/atoms/ErrorText';

const Wrapper = styled.div`
  position: absolute;
  top: 140px;
  left: 50%;
  background-color: ${Colors.red};
  text-align: center;
  justify-content: center;
  border-radius: 20px;
  padding: 25px 100px;
  transform: ${({ error }) => (error ? `translate(-50%, 0)` : `translate(-50%, -300%)`)};
  transition: transform 0.5s;
`;

const Error = ({ error }) => (
  <Wrapper error={error}>
    <ErrorText>{errorValue}</ErrorText>
  </Wrapper>
);

Error.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default Error;
