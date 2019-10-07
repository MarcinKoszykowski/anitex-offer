import React from 'react';
import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import Colors from 'styled/Colors';
import Button from 'components/atoms/Button';
import loginIcon from 'assets/icons/login.svg';
import printIcon from 'assets/icons/pdf-file.svg';
import addIcon from 'assets/icons/add.svg';
import saveIcon from 'assets/icons/save-file-option.svg';
import exportIcon from 'assets/icons/export.svg';
import logouttIcon from 'assets/icons/logout.svg';
import withContext from 'hoc/withContext';

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  min-height: 350px;
  max-width: 1600px;
`;

const LoginButton = styled(Button)`
  top: 50px;
  left: 180px;
`;

const PrintButton = styled(LoginButton)`
  top: 170px;
`;

const AddButton = styled(LoginButton)`
  top: 290px;
`;

const LoadButton = styled(LoginButton)`
  top: 410px;
`;

const SaveButton = styled(LoginButton)`
  top: 530px;
`;

const LogoutButton = styled(LoginButton)`
  top: 650px;
  background-size: 55% 55%;
`;

function Navigation({ context }) {
  const { login, buttonPrintOnClick, openNewItemBar, reference, openCenterBar, logout } = context;

  return (
    <Wrapper>
      <ReactToPrint
        onBeforeGetContent={buttonPrintOnClick}
        content={() => reference.current}
        trigger={() => (
          <PrintButton disabled={!login} icon={printIcon} buttonColor={Colors.yellow} />
        )}
      />
      <LoginButton
        disabled={login}
        onClick={() => openCenterBar('login')}
        icon={loginIcon}
        buttonColor={Colors.blue}
      />
      <AddButton
        disabled={!login}
        onClick={() => openNewItemBar('product')}
        icon={addIcon}
        buttonColor={Colors.red}
      />
      <LoadButton
        disabled={!login}
        onClick={() => openCenterBar('load')}
        icon={exportIcon}
        buttonColor={Colors.orange}
      />
      <SaveButton
        disabled={!login}
        onClick={() => openCenterBar('fileName')}
        icon={saveIcon}
        buttonColor={Colors.violet}
      />
      <LogoutButton
        disabled={!login}
        onClick={logout}
        icon={logouttIcon}
        buttonColor={Colors.grey}
      />
    </Wrapper>
  );
}

export default withContext(Navigation);
