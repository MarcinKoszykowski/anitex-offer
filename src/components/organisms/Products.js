import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from 'components/molecules/Product';
import withContext from 'hoc/withContext';

const Wrapper = styled.div`
  margin: 5px auto 0;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function Products({ context }) {
  const { product, deleteProduct, login } = context;

  return (
    <Wrapper>
      {product.map(item => (
        <Product
          number={product.findIndex(index => index.name === item.name)}
          key={item.name}
          item={item}
          deleteButtonOnClick={deleteProduct}
          disabled={!login}
        />
      ))}
    </Wrapper>
  );
}

Products.propTypes = {
  context: PropTypes.shape({
    product: PropTypes.array.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    login: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withContext(Products);
