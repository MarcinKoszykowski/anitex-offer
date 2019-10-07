import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Colors from '../../styled/Colors';
import addIcon from '../../assets/icons/add.svg';
import editIcon from '../../assets/icons/writing.svg';
import withContext from '../../hoc/withContext';

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

const Edit = ({ type, value, print, login, openNewItemBar }) => (
  <StyledButton
    disabled={!login}
    print={print}
    onClick={() => openNewItemBar(type)}
    buttonColor={Colors[value ? `blueDark` : `red`]}
    icon={value ? editIcon : addIcon}
  />
);

export default Edit;
