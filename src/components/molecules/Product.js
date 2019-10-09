import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Name from 'components/atoms/Product/Name';
import Functions from 'data/Functions';
import Image from 'components/atoms/Product/Image';
import trashIcon from 'assets/icons/rubbish-bin.svg';
import Button from 'components/atoms/Button';
import Price from 'components/atoms/Product/Price';
import Colors from 'styled/Colors';
import { buttonTitle } from '../../data/Value';

const DeleteButton = styled(Button)`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-size: 55% 55%;
  border-width: 3px;
  transition: opacity 0.5s, visibility 0.5s;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: ${({ number }) => Functions.setMargin(number)};
  margin-left: 5px;
  margin-right: 5px;
  height: 285px;
  padding: 10px 0;

  &:hover > ${DeleteButton} {
    visibility: visible;
    opacity: 0.8;
  }
`;

function Product({ item, deleteButtonOnClick, number, disabled }) {
  const { name, price, image } = item;

  return (
    <Wrapper number={number}>
      <Name>{name}</Name>
      <Price>{Functions.priceFormat(price)}</Price>
      <Image src={image} />
      <DeleteButton
        title={buttonTitle.product.delete}
        onClick={() => deleteButtonOnClick(number)}
        buttonColor={Colors.red}
        icon={trashIcon}
        disabled={disabled}
      />
    </Wrapper>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  deleteButtonOnClick: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Product;
