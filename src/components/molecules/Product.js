import React from 'react';
import styled from 'styled-components';
import Name from 'components/atoms/Product/Name';
import Functions from 'data/Functions';
import Image from 'components/atoms/Product/Image';
import trashIcon from 'assets/icons/rubbish-bin.svg';
import Button from 'components/atoms/Button';
import Price from 'components/atoms/Product/Price';
import Colors from 'styled/Colors';

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

function Product({ item, deleteButtonOnClick, number }) {
  const { name, price, image } = item;

  return (
    <Wrapper number={number}>
      <Name>{name}</Name>
      <Price>{Functions.priceFormat(price)}</Price>
      <Image src={image} />
      <DeleteButton onClick={deleteButtonOnClick} buttonColor={Colors.red} icon={trashIcon} />
    </Wrapper>
  );
}

export default Product;
