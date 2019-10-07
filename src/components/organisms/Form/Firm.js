import React from 'react';
import { form } from '../../../data/Value';
import FormInput from '../../molecules/FormInput';

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

export default Firm;
