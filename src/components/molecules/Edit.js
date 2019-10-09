import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import addIcon from 'assets/icons/add.svg';
import editIcon from 'assets/icons/writing.svg';
import colors from 'styled/colors';

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

const Edit = ({ info, type, value, print, login, editButtonOnClick }) => (
  <StyledButton
    title={`${value ? `Edytuj ` : `Wprowadź `}informację o ${
      info ? `dostawie i płatności` : `firmie`
    }`}
    disabled={!login}
    print={print}
    onClick={() => editButtonOnClick(type)}
    buttonColor={colors[value ? `blueDark` : `red`]}
    icon={value ? editIcon : addIcon}
  />
);

Edit.propTypes = {
  info: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  print: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired,
  editButtonOnClick: PropTypes.func.isRequired,
};

Edit.defaultProps = {
  info: false,
  value: '',
};

export default Edit;
