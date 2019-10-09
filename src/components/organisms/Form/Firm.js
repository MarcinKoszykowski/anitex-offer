import React from 'react';
import PropTypes from 'prop-types';
import { form } from 'data/value';
import FormInput from 'components/molecules/FormInput';

const Firm = ({ type, firm, inputFirm }) => (
  <>
    <FormInput
      name={form.name.firm.firm1}
      label={form.label.firm.firm1}
      value={firm.firm1}
      onChange={inputFirm}
    />
    {type.firm2 ? (
      <FormInput
        name={form.name.firm.firm2}
        label={form.label.firm.firm2}
        maxLength="30"
        value={firm.firm2}
        onChange={inputFirm}
      />
    ) : null}
    <FormInput
      name={form.name.firm.address1}
      label={form.label.firm.address1}
      maxLength="40"
      value={firm.address1}
      onChange={inputFirm}
    />
    <FormInput
      name={form.name.firm.address2}
      label={form.label.firm.address2}
      maxLength="40"
      value={firm.address2}
      onChange={inputFirm}
    />
    <FormInput
      name={form.name.firm.nip}
      label={form.label.firm.nip}
      pattern={form.pattern.nip}
      value={firm.nip}
      onChange={inputFirm}
    />
    <FormInput
      type="tel"
      name={form.name.firm.phone}
      label={form.label.firm.phone}
      pattern={form.pattern.phone}
      value={firm.phone}
      onChange={inputFirm}
    />
    {type.email ? (
      <FormInput
        type="email"
        name={form.name.firm.email}
        label={form.label.firm.email}
        maxLength="30"
        value={firm.email}
        onChange={inputFirm}
      />
    ) : null}
  </>
);

Firm.propTypes = {
  type: PropTypes.shape({
    firm2: PropTypes.bool.isRequired,
    email: PropTypes.bool.isRequired,
  }).isRequired,
  firm: PropTypes.shape({
    firm1: PropTypes.string.isRequired,
    firm2: PropTypes.string,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    nip: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
  inputFirm: PropTypes.func.isRequired,
};

export default Firm;
