import React, { useContext } from 'react';
import AppContext from 'context';
import PropTypes from 'prop-types';
import trashIcon from 'assets/icons/rubbish-bin.svg';
import editIcon from 'assets/icons/writing.svg';
import { red, blueDark } from 'styled/colors';
import { buttonTitle } from 'data/value';
import DeleteButton from 'components/Product/atoms/DeleteButton';
import EditButton from 'components/Product/atoms/EditButton';

function Edit({ number }) {
  const { deleteProduct, login, editProduct } = useContext(AppContext);
  const {
    product: { edit: editTitle, delete: deleteTitle },
  } = buttonTitle;

  return (
    login && (
      <>
        <DeleteButton title={deleteTitle} onClick={() => deleteProduct(number)} buttonColor={red} icon={trashIcon} />
        <EditButton title={editTitle} buttonColor={blueDark} onClick={() => editProduct(number)} icon={editIcon} />
      </>
    )
  );
}

Edit.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Edit;
