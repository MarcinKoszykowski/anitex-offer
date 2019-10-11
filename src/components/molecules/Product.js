import React, { useContext } from 'react';
import AppContext from 'context';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Name from 'components/atoms/Product/Name';
import { setMargin, priceFormat } from 'data/functions';
import Image from 'components/atoms/Product/Image';
import trashIcon from 'assets/icons/rubbish-bin.svg';
import editIcon from 'assets/icons/writing.svg';
import Button from 'components/atoms/Button';
import Price from 'components/atoms/Product/Price';
import { red, blueDark } from 'styled/colors';
import { buttonTitle } from 'data/value';

const DeleteButton = styled(Button)`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-size: 55% 55%;
  border-width: 3px;
  transition: opacity 0.5s, visibility 0.5s;
`;

const EditButton = styled(DeleteButton)`
  top: 60%;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: ${({ number }) => setMargin(number)};
  margin-left: 5px;
  margin-right: 5px;
  height: 285px;
  padding: 10px 0;

  &:hover > ${DeleteButton} {
    visibility: visible;
    opacity: 0.8;
  }
`;

function Product({ item, number }) {
  const { name, price, image } = item;
  const { product } = buttonTitle;
  const { deleteProduct, login, editProduct } = useContext(AppContext);

  return (
    <Wrapper number={number}>
      <Name>{name}</Name>
      <Price>{priceFormat(price)}</Price>
      <Image src={image} />
      {login && (
        <>
          <DeleteButton
            title={product.delete}
            onClick={() => deleteProduct(number)}
            buttonColor={red}
            icon={trashIcon}
          />
          <EditButton
            title={product.edit}
            buttonColor={blueDark}
            onClick={() => editProduct(number)}
            icon={editIcon}
          />
        </>
      )}
    </Wrapper>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default Product;
