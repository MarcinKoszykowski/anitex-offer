import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkboxes from 'components/organisms/Form/Checkboxes';
import Firm from 'components/organisms/Form/Firm';
import Info from 'components/organisms/Form/Info';
import Product from 'components/organisms/Form/Product';
import withContext from 'hoc/withContext';
import Button from 'components/atoms/Button';
import colors from 'styled/colors';
import addIcon from 'assets/icons/add.svg';

const Form = styled.form`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormButton = styled(Button)`
  display: block;
  position: relative;
  height: 60px;
  width: 60px;
  margin-top: 30px;
  background-size: 55% 55%;
  border-width: 3.5px;
`;

function FormTemplate({ context }) {
  const { firm, info, formType, addFirm, addInfo, addProduct, edit } = context;

  const [type, setType] = useState({
    firm2: false,
    email: false,
  });

  const [formFirm, setFormFirm] = useState({
    firm1: '',
    firm2: '',
    address1: '',
    address2: '',
    nip: '',
    phone: '',
    email: '',
  });

  const [formInfo, setFormInfo] = useState({
    delivery: '',
    deadline: '',
    payment: '',
  });

  const [formProduct, setFormProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const setEditState = () => {
    if (edit) {
      setType({
        firm2: !!firm.firm2,
        email: !!firm.email,
      });

      setFormFirm({
        firm1: firm.firm1,
        firm2: firm.firm2,
        address1: firm.address1,
        address2: firm.address2,
        nip: firm.nip,
        phone: firm.phone,
        email: firm.email,
      });

      setFormInfo({
        delivery: info.delivery,
        deadline: info.deadline,
        payment: info.payment,
      });
    }
  };

  const handleCheckboxOnClick = value => {
    setType(prevState => ({
      ...prevState,
      [value]: !type[value],
    }));

    setFormFirm(prevState => ({
      ...prevState,
      [value]: !type[value] ? '' : null,
    }));
  };

  const handleInputChangeFirm = e => {
    const value = {
      ...formFirm,
      [e.target.name]: e.target.value,
    };
    setFormFirm(value);
  };

  const handleInputChangeInfo = e => {
    const value = {
      ...formInfo,
      [e.target.name]: e.target.value,
    };
    setFormInfo(value);
  };

  const handleInputChangeProduct = e => {
    const value = {
      ...formProduct,
      [e.target.name]: e.target.value,
    };
    setFormProduct(value);
  };

  const handleEffectFunction = useCallback(setEditState, [edit]);

  useEffect(() => {
    handleEffectFunction();
  }, [handleEffectFunction]);

  const formOnSubmit = e => {
    if (formType === 'firm') {
      addFirm(e, formFirm);
    } else if (formType === 'info') {
      addInfo(e, formInfo);
    } else {
      addProduct(e, formProduct);
    }
  };
  return (
    <Form autoComplete="off" onSubmit={e => formOnSubmit(e)}>
      {formType === 'firm' && (
        <>
          <Checkboxes type={type} checkboxOnClick={handleCheckboxOnClick} />
          <Firm type={type} firm={formFirm} inputFirm={handleInputChangeFirm} />
        </>
      )}
      {formType === 'info' && <Info info={formInfo} inputInfo={handleInputChangeInfo} />}
      {formType === 'product' && (
        <Product product={formProduct} inputProduct={handleInputChangeProduct} />
      )}
      <FormButton icon={addIcon} buttonColor={colors.green} />
    </Form>
  );
}

FormTemplate.propTypes = {
  context: PropTypes.shape({
    firm: PropTypes.shape({
      firm1: PropTypes.string.isRequired,
      firm2: PropTypes.string,
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string.isRequired,
      nip: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string,
    }).isRequired,
    info: PropTypes.shape({
      delivery: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      payment: PropTypes.string.isRequired,
    }),
    formType: PropTypes.string.isRequired,
    addFirm: PropTypes.func.isRequired,
    addInfo: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withContext(FormTemplate);
