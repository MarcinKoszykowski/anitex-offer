import React, { useContext } from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import Product from 'components/Product/Product';

const Wrapper = styled.div`
  margin: 5px auto 0;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function ProductTemplate() {
  const { product } = useContext(AppContext);

  return (
    <Wrapper>
      {product.map(item => (
        <Product number={product.findIndex(index => index.name === item.name)} key={item.name} {...item} />
      ))}
    </Wrapper>
  );
}

export default ProductTemplate;
