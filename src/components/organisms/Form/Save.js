import React from 'react';
import PropTypes from 'prop-types';
import { save } from 'data/value';
import FormInput from 'components/molecules/FormInput';

const { name, label } = save;
const Save = ({ fileName, inputFileName }) => (
  <FormInput type="text" name={name} label={label} maxLength="30" value={fileName} onChange={inputFileName} />
);

Save.propTypes = {
  fileName: PropTypes.string.isRequired,
  inputFileName: PropTypes.func.isRequired,
};

export default Save;
