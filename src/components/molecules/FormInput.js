import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import InputBar from 'components/atoms/InputBar';

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  position: relative;
  flex-shrink: 0;
`;

const FormInput = ({ reference, pattern, onChange, name, type, label, value, maxLength }) => (
  <Wrapper>
    <Input
      ref={reference}
      pattern={pattern}
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      type={type}
      name={name}
      id={name}
      required
      placeholder=" "
    />
    <Label htmlFor={name}>{label}</Label>
    <InputBar />
  </Wrapper>
);

FormInput.propTypes = {
  reference: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  pattern: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.string,
};

FormInput.defaultProps = {
  reference: null,
  pattern: null,
  type: 'text',
  label: null,
  value: null,
  maxLength: null,
};

export default FormInput;
