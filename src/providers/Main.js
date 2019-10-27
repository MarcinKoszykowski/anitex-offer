import React from 'react';
import PropTypes from 'prop-types';
import Firm from './Firm';
import Info from './Info';
import Product from './Product';
import Bar from './Bar';
import Form from './Form';

const Main = ({ children }) => (
  <Firm>
    <Info>
      <Product>
        <Bar>
          <Form>{children}</Form>
        </Bar>
      </Product>
    </Info>
  </Firm>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
