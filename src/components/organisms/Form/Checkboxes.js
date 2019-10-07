import React from 'react';
import styled from 'styled-components';
import { form } from 'data/Value';
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

export default Checkboxes;
