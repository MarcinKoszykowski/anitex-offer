import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppContext from 'context/AppContext';
import { blueDark, red } from 'styled/colors';
import addIcon from 'assets/icons/add.svg';
import editIcon from 'assets/icons/writing.svg';
import Button from 'components/Button';

const StyledButton = styled(Button)`
  display: ${({ print }) => (print ? `none` : null)};
  width: 50px;
  height: 50px;
  top: 50%;
  right: -100px;
  transform: translateY(-50%);
  border-width: 3px;
  background-size: 55% 55%;
  z-index: 1;
`;

function Edit({ info, type, value }) {
  const { openNewItemBar, login, print } = useContext(AppContext);
  return (
    <StyledButton
      title={`${value ? `Edytuj ` : `Wprowadź `}informację o ${info ? `dostawie i płatności` : `firmie`}`}
      disabled={!login}
      print={print}
      onClick={() => openNewItemBar(type)}
      buttonColor={value ? blueDark : red}
      icon={value ? editIcon : addIcon}
    />
  );
}

Edit.propTypes = {
  info: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Edit.defaultProps = {
  info: false,
  value: '',
};

export default Edit;
