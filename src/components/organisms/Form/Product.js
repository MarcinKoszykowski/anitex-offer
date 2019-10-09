import React from 'react';
import PropTypes from 'prop-types';
import { form } from 'data/value';
import FormInput from 'components/molecules/FormInput';

const Product = ({ product, inputProduct }) => (
  <>
    <FormInput
      name={form.name.product.name}
      label={form.label.product.name}
      maxLength="35"
      value={product.name}
      onChange={inputProduct}
    />
    <FormInput
      name={form.name.product.price}
      label={form.label.product.price}
      pattern={form.pattern.price}
      value={product.price}
      onChange={inputProduct}
    />
    <FormInput
      name={form.name.product.image}
      label={form.label.product.image}
      type="url"
      value={product.image}
      onChange={inputProduct}
    />
  </>
);

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  inputProduct: PropTypes.func.isRequired,
};

export default Product;
