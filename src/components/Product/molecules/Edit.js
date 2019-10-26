import React, { useContext } from 'react';
import AppContext from 'context';
import PropTypes from 'prop-types';
import { red, blueDark } from 'styled/colors';
import { buttonTitle } from 'data/value';
import trashIcon from 'assets/icons/rubbish-bin.svg';
import editIcon from 'assets/icons/writing.svg';
import DeleteButton from '../atoms/DeleteButton';
import EditButton from '../atoms/EditButton';

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
