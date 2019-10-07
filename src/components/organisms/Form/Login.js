import React from 'react';
import { login } from 'data/Value';
import FormInput from 'components//molecules/FormInput';

const Login = ({ password, inputPassword }) => (
  <FormInput
    type="password"
    name={login.name}
    label={login.label}
    maxLength="20"
    value={password}
    onChange={inputPassword}
  />
);

export default Login;
