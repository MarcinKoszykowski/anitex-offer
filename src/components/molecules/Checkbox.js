import React from 'react';
import PropTypes from 'prop-types';
import CheckboxLabel from 'components/atoms/CheckboxLabel';
import Checkmark from 'components/atoms/Checkmark';

const Checkbox = ({ checked, children, checkboxOnChange }) => (
  <CheckboxLabel>
    <input checked={checked} type="checkbox" onChange={checkboxOnChange} />
    <Checkmark />
    {children}
  </CheckboxLabel>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkboxOnChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Checkbox;
