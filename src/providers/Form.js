import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormContext from 'context/FormContext';

const Form = ({ children }) => {
  const [type, setType] = useState({
    firm2: false,
    email: false,
  });

  const [formFirm, setFormFirm] = useState({
    firm1: '',
    firm2: '',
    address1: '',
    address2: '',
    nip: '',
    phone: '',
    email: '',
  });

  const [formInfo, setFormInfo] = useState({
    delivery: '',
    deadline: '',
    payment: '',
  });

  const [formProduct, setFormProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const contextElement = {
    type,
    setType,
    formFirm,
    setFormFirm,
    formInfo,
    setFormInfo,
    formProduct,
    setFormProduct,
  };

  return <FormContext.Provider value={contextElement}>{children}</FormContext.Provider>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
