import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoContext from 'context/InfoContext';

const Info = ({ children }) => {
  const [info, setInfo] = useState({
    delivery: '',
    deadline: '',
    payment: '',
  });

  const contextElement = {
    info,
    setInfo,
  };

  return <InfoContext.Provider value={contextElement}>{children}</InfoContext.Provider>;
};

Info.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Info;
