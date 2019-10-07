import React, { useState } from 'react';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import Button from 'components/atoms/Button';
import Colors from 'styled/Colors';
import checkIcon from 'assets/icons/check-mark.svg';
import Login from 'components/organisms/Form/Login';
import Save from 'components/organisms/Form/Save';
import Load from 'components/organisms/Form/Load';

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

function CenterFormTemplate({ context }) {
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
    const fr = new FileReader();
    fr.readAsText(e.target.files[0]);
    fr.onload = evn => {
      setData(JSON.parse(evn.target.result));
    };
  };

  const { formType, saveData, checkPassword, loadData } = context;

  const formOnSubmit = e => {
    if (formType === 'login') {
      checkPassword(e, password);
      setPassword('');
    } else if (formType === 'fileName') {
      saveData(e, fileName);
      setTimeout(() => setFileName(''), 2000);
    } else {
      loadData(e, data);
    }
  };
  return (
    <Form autoComplete="off" onSubmit={e => formOnSubmit(e)}>
      {formType === 'login' && (
        <Login password={password} inputPassword={handleInputChangePassword} />
      )}
      {formType === 'fileName' && (
        <Save fileName={fileName} inputFileName={handleInputChangeFileName} />
      )}
      {formType === 'load' && <Load loadOnChange={handleInputChangeLoad} />}
      <FormButton icon={checkIcon} buttonColor={Colors.green} />
    </Form>
  );
}

export default withContext(CenterFormTemplate);
