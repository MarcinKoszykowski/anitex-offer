import React from 'react';
import PropTypes from 'prop-types';
import Label from './atoms/Label';
import Checkmark from './atoms/Checkmark';

const Checkbox = ({ checked, children, checkboxOnChange }) => (
  <Label>
    <input checked={checked} type="checkbox" onChange={checkboxOnChange} />
    <Checkmark />
    {children}
  </Label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkboxOnChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Checkbox;
