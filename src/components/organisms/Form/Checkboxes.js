import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { form } from 'data/value';
import Checkbox from 'components/molecules/Checkbox';

const Wrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: auto auto;
`;

const Checkboxes = ({ type, checkboxOnClick }) => (
  <Wrapper>
    <Checkbox checked={type.firm2} checkboxOnChange={() => checkboxOnClick('firm2')}>
      {form.label.checkbox.firm}
    </Checkbox>
    <Checkbox checked={type.email} checkboxOnChange={() => checkboxOnClick('email')}>
      {form.label.checkbox.email}
    </Checkbox>
  </Wrapper>
);

Checkboxes.propTypes = {
  type: PropTypes.shape({
    firm2: PropTypes.bool.isRequired,
    email: PropTypes.bool.isRequired,
  }).isRequired,
  checkboxOnClick: PropTypes.func.isRequired,
};

export default Checkboxes;
