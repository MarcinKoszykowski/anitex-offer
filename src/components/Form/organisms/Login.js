import React from 'react';
import PropTypes from 'prop-types';
import { login } from 'data/value';
import FormInput from '../molecules/FormInput';

const { name, label } = login;
const Login = ({ password, inputPassword }) => (
  <FormInput type="password" name={name} label={label} maxLength="20" value={password} onChange={inputPassword} />
);

Login.propTypes = {
  password: PropTypes.string.isRequired,
  inputPassword: PropTypes.func.isRequired,
};

export default Login;
