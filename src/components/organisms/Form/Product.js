import React from 'react';
import PropTypes from 'prop-types';
import { form } from 'data/value';
import FormInput from 'components/molecules/FormInput';

function Product({ product, inputProduct }) {
  const { name, price, image } = product;
  const { product: productName } = form.name;
  const { product: productLabel } = form.label;
  return (
    <>
      <FormInput
        name={productName.name}
        label={productLabel.name}
        maxLength="35"
        value={name}
        onChange={inputProduct}
      />
      <FormInput
        name={productName.price}
        label={productLabel.price}
        pattern={form.pattern.price}
        value={price}
        onChange={inputProduct}
      />
      <FormInput
        name={productName.image}
        label={productLabel.image}
        type="url"
        value={image}
        onChange={inputProduct}
      />
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  inputProduct: PropTypes.func.isRequired,
};

export default Product;
