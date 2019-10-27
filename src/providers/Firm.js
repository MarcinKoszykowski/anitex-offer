import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FirmContext from 'context/FirmContext';

const Firm = ({ children }) => {
  const [firm, setFirm] = useState({
    firm1: '',
    firm2: '',
    address1: '',
    address2: '',
    nip: '',
    phone: '',
    email: '',
  });

  const contextElement = {
    firm,
    setFirm,
  };

  return <FirmContext.Provider value={contextElement}>{children}</FirmContext.Provider>;
};

Firm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Firm;
