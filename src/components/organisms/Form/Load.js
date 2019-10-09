import React from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/molecules/FormInput';
import { load } from 'data/Value';

const Load = ({ loadOnChange }) => (
  <FormInput name={load.name} onChange={loadOnChange} type="file" accept="application/json" />
);

Load.propTypes = {
  loadOnChange: PropTypes.func.isRequired,
};

export default Load;
