import React from 'react';
import { save } from '../../../data/Value';
import FormInput from '../../molecules/FormInput';

const Save = ({ fileName, inputFileName }) => (
  <FormInput
    type="text"
    name={save.name}
    label={save.label}
    maxLength="30"
    value={fileName}
    onChange={inputFileName}
  />
);

export default Save;
