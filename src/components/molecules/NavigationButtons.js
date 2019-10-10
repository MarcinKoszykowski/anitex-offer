import React, { useContext } from 'react';
import AppContext from 'context';
import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import colors from 'styled/colors';
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

  return (
    <Wrapper>
      <StyledButton
        title={buttonTitle.login}
        disabled={login}
        onClick={() => {
          openCenterBar('login');
          setError(false);
        }}
        icon={loginIcon}
        buttonColor={colors.blue}
      />
      <ReactToPrint
        onBeforeGetContent={buttonPrintOnClick}
        content={() => reference.current}
        trigger={() => (
          <StyledButton
            title={buttonTitle.print}
            disabled={!login}
            icon={printIcon}
            buttonColor={colors.yellow}
          />
        )}
      />
      <StyledButton
        title={buttonTitle.product.add}
        disabled={!login}
        onClick={() => openNewItemBar('product')}
        icon={addIcon}
        buttonColor={colors.red}
      />
      <StyledButton
        title={buttonTitle.offer.load}
        disabled={!login}
        onClick={() => openCenterBar('load')}
        icon={exportIcon}
        buttonColor={colors.orange}
      />
      <StyledButton
        title={buttonTitle.offer.save}
        disabled={!login}
        onClick={() => openCenterBar('fileName')}
        icon={saveIcon}
        buttonColor={colors.violet}
      />
      <LogoutButton
        title={buttonTitle.logout}
        disabled={!login}
        onClick={logout}
        icon={logouttIcon}
        buttonColor={colors.grey}
      />
    </Wrapper>
  );
}

export default NavigationButtons;
