import React from 'react';
import PropTypes from 'prop-types';
import { form } from 'data/value';
import FormInput from 'components/molecules/FormInput';

function Info({ info, inputInfo }) {
  const { delivery, deadline, payment } = info;
  const { info: infoName } = form.name;
  const { info: infoLabel } = form.label;

  return (
    <>
      <FormInput
        name={infoName.delivery}
        label={infoLabel.delivery}
        maxLength="55"
        value={delivery}
        onChange={inputInfo}
      />
      <FormInput
        name={infoName.deadline}
        label={infoLabel.deadline}
        maxLength="55"
        value={deadline}
        onChange={inputInfo}
      />
      <FormInput
        name={infoName.payment}
        label={infoLabel.payment}
        maxLength="55"
        value={payment}
        onChange={inputInfo}
      />
    </>
  );
}

Info.propTypes = {
  info: PropTypes.shape({
    delivery: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
  }).isRequired,
  inputInfo: PropTypes.func.isRequired,
};

export default Info;
