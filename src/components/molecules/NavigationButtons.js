import React, { useContext } from 'react';
import AppContext from 'context';
import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import { blue, yellow, red, orange, violet, grey } from 'styled/colors';
import Button from 'components/atoms/Button';
import loginIcon from 'assets/icons/login.svg';
import printIcon from 'assets/icons/pdf-file.svg';
import addIcon from 'assets/icons/add.svg';
import saveIcon from 'assets/icons/save-file-option.svg';
import exportIcon from 'assets/icons/export.svg';
import logouttIcon from 'assets/icons/logout.svg';
import { buttonTitle } from 'data/value';

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
`;

const StyledButton = styled(Button)`
  position: relative;
`;

const LogoutButton = styled(StyledButton)`
  background-size: 55% 55%;
`;

function NavigationButtons() {
  const {
    login,
    buttonPrintOnClick,
    openNewItemBar,
    reference,
    openCenterBar,
    logout,
    setError,
  } = useContext(AppContext);
  const { login: loginTitle, print, offer, logout: logoutTitle } = buttonTitle;
  const { load, save } = offer;
  const { add } = buttonTitle.product;

  return (
    <Wrapper>
      <StyledButton
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
        trigger={() => (
          <StyledButton title={print} disabled={!login} icon={printIcon} buttonColor={yellow} />
        )}
      />
      <StyledButton
        title={add}
        disabled={!login}
        onClick={() => openNewItemBar('product')}
        icon={addIcon}
        buttonColor={red}
      />
      <StyledButton
        title={load}
        disabled={!login}
        onClick={() => openCenterBar('load')}
        icon={exportIcon}
        buttonColor={orange}
      />
      <StyledButton
        title={save}
        disabled={!login}
        onClick={() => openCenterBar('fileName')}
        icon={saveIcon}
        buttonColor={violet}
      />
      <LogoutButton
        title={logoutTitle}
        disabled={!login}
        onClick={logout}
        icon={logouttIcon}
        buttonColor={grey}
      />
    </Wrapper>
  );
}

export default NavigationButtons;
