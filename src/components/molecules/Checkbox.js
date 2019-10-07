import React from 'react';
import CheckboxLabel from 'components/atoms/CheckboxLabel';
import Checkmark from 'components/atoms/Checkmark';

const Checkbox = ({ checked, children, checkboxOnChange }) => (
  <CheckboxLabel>
    <input checked={checked} type="checkbox" onChange={checkboxOnChange} />
    <Checkmark />
    {children}
  </CheckboxLabel>
);

export default Checkbox;
