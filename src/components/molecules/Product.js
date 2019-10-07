import React from 'react';
import styled from 'styled-components';
import Name from '../atoms/Product/Name';
import Functions from '../../data/Functions';
import Image from '../atoms/Product/Image';
import withContext from '../../hoc/withContext';
import trashIcon from '../../assets/icons/rubbish-bin.svg';
import Button from '../atoms/Button';
import Price from '../atoms/Product/Price';
import Colors from '../../styled/Colors';

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
  cursor: pointer;
  margin-top: ${({ number }) => Functions.setMargin(number)};
  margin-left: 5px;
  margin-right: 5px;
  height: 285px;
  padding: 10px 0;

  &:hover > ${DeleteButton} {
    visibility: visible;
    opacity: 1;
  }
`;

function Product({ item, deleteProduct, number }) {
  const { name, price, image } = item;

  return (
    <Wrapper number={number}>
      <Name>{name}</Name>
      <Price>{Functions.priceFormat(price)}</Price>
      <Image src={image} />
      <DeleteButton onClick={deleteProduct} buttonColor={Colors.red} icon={trashIcon} />
    </Wrapper>
  );
}

export default Product;
