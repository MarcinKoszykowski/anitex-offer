import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Button from 'components/Button';
import { green } from 'styled/colors';
import checkIcon from 'assets/icons/check-mark.svg';
import Login from 'components/Form/organisms/Login';
import Save from 'components/Form/organisms/Save';
import Load from 'components/Form/organisms/Load';

const Form = styled.form`
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-column-gap: 60px;
  align-items: center;
`;

const FormButton = styled(Button)`
  display: inline-block;
  position: relative;
  height: 45px;
  width: 45px;
  background-size: 55% 55%;
  border-width: 3px;
`;

function CenterFormTemplate() {
  const { formType, saveData, checkPassword, loadData, disabledCenterFormButton, setDisabledCenterFormButton } = useContext(AppContext);

  const [password, setPassword] = useState('');
  const [fileName, setFileName] = useState('');
  const [data, setData] = useState(null);

  const handleInputChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleInputChangeFileName = e => {
    setFileName(e.target.value);
  };

  const handleInputChangeLoad = e => {
    const file = e.target.files[0];
    if (file.type === 'application/json') {
      setDisabledCenterFormButton(false);
      const fr = new FileReader();
      fr.readAsText(e.target.files[0]);
      fr.onload = evn => {
        setData(JSON.parse(evn.target.result));
      };
    } else {
      setDisabledCenterFormButton(true);
    }
  };

  const formOnSubmit = e => {
    if (formType === 'login') {
      checkPassword(e, password);
    } else if (formType === 'fileName') {
      saveData(e, fileName);
    } else {
      loadData(e, data);
    }
  };
  return (
    <Form autoComplete="off" onSubmit={e => formOnSubmit(e)}>
      {formType === 'login' && <Login password={password} inputPassword={handleInputChangePassword} />}
      {formType === 'fileName' && <Save fileName={fileName} inputFileName={handleInputChangeFileName} />}
      {formType === 'load' && <Load loadOnChange={handleInputChangeLoad} />}
      <FormButton disabled={disabledCenterFormButton} icon={checkIcon} buttonColor={green} />
    </Form>
  );
}

export default CenterFormTemplate;
