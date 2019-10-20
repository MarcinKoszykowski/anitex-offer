import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Name from 'components/Product/atoms/Name';
import { getMargin, getPrice } from 'data/functions';
import Image from 'components/Product/atoms/Image';
import Price from 'components/Product/atoms/Price';
import Edit from 'components/Product/molecules/Edit';
import DeleteButton from 'components/Product/atoms/DeleteButton';

const Wrapper = styled.div`
  position: relative;
  margin-top: ${({ number }) => getMargin(number)};
  margin-left: 5px;
  margin-right: 5px;
  height: 285px;
  padding: 10px 0;

  &:hover > ${DeleteButton} {
    visibility: visible;
    opacity: 0.8;
  }
`;

const Product = ({ name, price, image, number }) => (
  <Wrapper number={number}>
    <Name>{name}</Name>
    <Price>{getPrice(price)}</Price>
    <Image src={image} />
    <Edit number={number} />
  </Wrapper>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Product;
