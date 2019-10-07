import React from 'react';
import styled from 'styled-components';
import Product from '../molecules/Product';
import withContext from '../../hoc/withContext';

const Wrapper = styled.div`
  margin: 5px auto 0;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function Products({ context }) {
  // const { product, deleteProduct } = context;

  return (
    <Wrapper>
      {context.product.map(item => (
        <Product
          number={context.product.findIndex(index => index.name === item.name)}
          key={item.name}
          item={item}
          deleteButtonOnClick={context.deleteProduct}
        />
      ))}
    </Wrapper>
  );
}

export default withContext(Products);
