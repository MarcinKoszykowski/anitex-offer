import React from 'react';
import FormInput from 'components/molecules/FormInput';

const Load = ({ loadOnChange }) => (
  <FormInput onChange={loadOnChange} type="file" accept="application/json" />
);

export default Load;
