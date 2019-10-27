import React, { useContext } from 'react';
import AppContext from 'context/AppContext';
import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import { buttonTitle } from 'data/value';
import { blue, yellow, red, orange, violet, grey } from 'styled/colors';
import loginIcon from 'assets/icons/login.svg';
import printIcon from 'assets/icons/pdf-file.svg';
import addIcon from 'assets/icons/add.svg';
import saveIcon from 'assets/icons/save-file-option.svg';
import exportIcon from 'assets/icons/export.svg';
import logouttIcon from 'assets/icons/logout.svg';
import Button from './atoms/Button';

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
`;

const StyledButton = styled(Button)`
  background-size: 55% 55%;
`;

const Navigation = () => {
  const { login, buttonPrintOnClick, openNewItemBar, reference, openCenterBar, logout, setError } = useContext(AppContext);
  const {
    login: loginTitle,
    print,
    offer: { load, save },
    logout: logoutTitle,
    product: { add },
  } = buttonTitle;

  return (
    <Wrapper>
      <Button
        title={loginTitle}
        disabled={login}
        onClick={() => {
          openCenterBar('login');
          setError(false);
        }}
        icon={loginIcon}
        buttonColor={blue}
      />
      <ReactToPrint
        onBeforeGetContent={buttonPrintOnClick}
        content={() => reference.current}
        trigger={() => <Button title={print} disabled={!login} icon={printIcon} buttonColor={yellow} />}
      />
      <Button title={add} disabled={!login} onClick={() => openNewItemBar('product')} icon={addIcon} buttonColor={red} />
      <Button title={load} disabled={!login} onClick={() => openCenterBar('load')} icon={exportIcon} buttonColor={orange} />
      <Button title={save} disabled={!login} onClick={() => openCenterBar('fileName')} icon={saveIcon} buttonColor={violet} />
      <StyledButton title={logoutTitle} disabled={!login} onClick={logout} icon={logouttIcon} buttonColor={grey} />
    </Wrapper>
  );
};

export default Navigation;
