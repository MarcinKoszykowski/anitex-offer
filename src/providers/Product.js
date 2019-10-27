import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from 'context/ProductContext';

const Product = ({ children }) => {
  const [editProductNumber, setEditProductNumber] = useState(null);
  const [productEdit, setProductEdit] = useState(false);
  const [product, setProduct] = useState([]);
  const [updateProduct, setUpdateProduct] = useState(false);

  const contextElement = {
    editProductNumber,
    setEditProductNumber,
    productEdit,
    setProductEdit,
    product,
    setProduct,
    updateProduct,
    setUpdateProduct,
  };

  return <ProductContext.Provider value={contextElement}>{children}</ProductContext.Provider>;
};

Product.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Product;
