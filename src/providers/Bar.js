import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BarContext from 'context/BarContext';

const Bar = ({ children }) => {
  const [disabledCenterFormButton, setDisabledCenterFormButton] = useState(false);
  const [centerBarIsVisibility, setCenterBarIsVisibility] = useState(false);
  const [centerBarAnimation, setCenterBarAnimation] = useState(false);
  const [newItemBarIsVisibility, setNewItemBarIsVisibility] = useState(false);
  const [newItemBarAnimation, setNewItemBarAnimation] = useState(false);

  const contextElement = {
    disabledCenterFormButton,
    setDisabledCenterFormButton,
    centerBarIsVisibility,
    setCenterBarIsVisibility,
    centerBarAnimation,
    setCenterBarAnimation,
    newItemBarIsVisibility,
    setNewItemBarIsVisibility,
    newItemBarAnimation,
    setNewItemBarAnimation,
  };

  return <BarContext.Provider value={contextElement}>{children}</BarContext.Provider>;
};

Bar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bar;
