import React from 'react';
import PropTypes from 'prop-types';
import { form } from 'data/value';
import FormInput from 'components//molecules/FormInput';

const Info = ({ info, inputInfo }) => (
  <>
    <FormInput
      name={form.name.info.delivery}
      label={form.label.info.delivery}
      maxLength="55"
      value={info.delivery}
      onChange={inputInfo}
    />
    <FormInput
      name={form.name.info.deadline}
      label={form.label.info.deadline}
      maxLength="55"
      value={info.deadline}
      onChange={inputInfo}
    />
    <FormInput
      name={form.name.info.payment}
      label={form.label.info.payment}
      maxLength="55"
      value={info.payment}
      onChange={inputInfo}
    />
  </>
);

Info.propTypes = {
  info: PropTypes.shape({
    delivery: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
  }).isRequired,
  inputInfo: PropTypes.func.isRequired,
};

export default Info;
