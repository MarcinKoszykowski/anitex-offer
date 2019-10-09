import React from 'react';
import PropTypes from 'prop-types';
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

Login.propTypes = {
  password: PropTypes.string.isRequired,
  inputPassword: PropTypes.func.isRequired,
};

export default Login;
