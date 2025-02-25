import React from 'react';
import PropTypes from 'prop-types';
import { form } from 'data/value';
import FormInput from '../molecules/FormInput';

const Firm = ({ type, firm, inputFirm }) => {
  const { firm1, firm2, address1, address2, nip, phone, email } = firm;
  const {
    pattern,
    name: { firm: firmName },
    label: { firm: firmLabel },
  } = form;

  return (
    <>
      <FormInput name={firmName.firm1} label={firmLabel.firm1} value={firm1} onChange={inputFirm} />
      {type.firm2 && <FormInput name={firmName.firm2} label={firmLabel.firm2} maxLength="30" value={firm2} onChange={inputFirm} />}
      <FormInput name={firmName.address1} label={firmLabel.address1} maxLength="40" value={address1} onChange={inputFirm} />
      <FormInput name={firmName.address2} label={firmLabel.address2} maxLength="40" value={address2} onChange={inputFirm} />
      <FormInput name={firmName.nip} label={firmLabel.nip} pattern={pattern.nip} value={nip} onChange={inputFirm} />
      <FormInput type="tel" name={firmName.phone} label={firmLabel.phone} pattern={pattern.phone} value={phone} onChange={inputFirm} />
      {type.email && <FormInput type="email" name={firmName.email} label={firmLabel.email} maxLength="30" value={email} onChange={inputFirm} />}
    </>
  );
};

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
