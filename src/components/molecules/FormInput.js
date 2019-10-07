import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import InputBar from '../atoms/InputBar';

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

export default FormInput;
