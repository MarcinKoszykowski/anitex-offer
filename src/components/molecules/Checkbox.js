import React from 'react';
import CheckboxLabel from '../atoms/CheckboxLabel';
import Checkmark from '../atoms/Checkmark';

const Checkbox = ({ checked, children, checkboxOnChange }) => (
  <CheckboxLabel>
    <input checked={checked} type="checkbox" onChange={checkboxOnChange} />
    <Checkmark />
    {children}
  </CheckboxLabel>
);

export default Checkbox;
