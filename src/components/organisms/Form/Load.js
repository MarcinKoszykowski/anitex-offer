import React from 'react';
import FormInput from '../../molecules/FormInput';
import withContext from '../../../hoc/withContext';

function Load({ loadOnChange, context }) {
  const { inputReference } = context;

  return (
    <FormInput
      onChange={loadOnChange}
      reference={inputReference}
      type="file"
      accept="application/json"
    />
  );
}

export default withContext(Load);
