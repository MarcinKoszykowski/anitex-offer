import React from 'react';
import PropTypes from 'prop-types';
import { save } from 'data/Value';
import FormInput from 'components/molecules/FormInput';

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

Save.propTypes = {
  fileName: PropTypes.string.isRequired,
  inputFileName: PropTypes.func.isRequired,
};

export default Save;
