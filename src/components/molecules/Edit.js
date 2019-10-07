import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import addIcon from 'assets/icons/add.svg';
import editIcon from 'assets/icons/writing.svg';
import Colors from 'styled/Colors';

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

const Edit = ({ type, value, print, login, editButtonOnClick }) => (
  <StyledButton
    disabled={!login}
    print={print}
    onClick={() => editButtonOnClick(type)}
    buttonColor={Colors[value ? `blueDark` : `red`]}
    icon={value ? editIcon : addIcon}
  />
);

export default Edit;
