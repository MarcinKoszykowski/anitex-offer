import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { form } from 'data/value';
import Checkbox from 'components/Checkbox/Checkbox';

const Wrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: auto auto;
`;

const CheckboxTemplate = ({ type, checkboxOnClick }) => {
  const {
    label: { checkbox },
  } = form;

  return (
    <Wrapper>
      <Checkbox checked={type.firm2} checkboxOnChange={() => checkboxOnClick('firm2')}>
        {checkbox.firm}
      </Checkbox>
      <Checkbox checked={type.email} checkboxOnChange={() => checkboxOnClick('email')}>
        {checkbox.email}
      </Checkbox>
    </Wrapper>
  );
};

CheckboxTemplate.propTypes = {
  type: PropTypes.shape({
    firm2: PropTypes.bool.isRequired,
    email: PropTypes.bool.isRequired,
  }).isRequired,
  checkboxOnClick: PropTypes.func.isRequired,
};

export default CheckboxTemplate;
