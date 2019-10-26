import React from 'react';
import PropTypes from 'prop-types';
import { load } from 'data/value';
import FormInput from '../molecules/FormInput';

const { name } = load;
const Load = ({ loadOnChange }) => <FormInput name={name} onChange={loadOnChange} type="file" accept="application/json" />;

Load.propTypes = {
  loadOnChange: PropTypes.func.isRequired,
};

export default Load;
