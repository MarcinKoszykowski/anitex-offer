import React, { useState, useEffect, useCallback, useContext } from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import Firm from 'components/Form/organisms/Firm';
import Info from 'components/Form/organisms/Info';
import Product from 'components/Form/organisms/Product';
import Button from 'components/Button';
import { green } from 'styled/colors';
import addIcon from 'assets/icons/add.svg';
import Checkbox from 'template/CheckboxTemplate';

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

function FormTemplate() {
  const {
    firm: { firm1, firm2, address1, address2, nip, phone, email },
    info: { deadline, delivery, payment },
    product,
    formType,
    addFirm,
    addInfo,
    addProduct,
    edit,
    editProductNumber,
    productEdit,
    addEditProduct,
  } = useContext(AppContext);

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
        firm2: !!firm2,
        email: !!email,
      });

      setFormFirm({
        firm1,
        firm2,
        address1,
        address2,
        nip,
        phone,
        email,
      });

      setFormInfo({
        delivery,
        deadline,
        payment,
      });
    }

    if (productEdit) {
      setFormProduct({
        name: product[editProductNumber].name,
        price: product[editProductNumber].price,
        image: product[editProductNumber].image,
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

  const handleEffectFunction = useCallback(setEditState, [edit, productEdit]);

  useEffect(() => {
    handleEffectFunction();
  }, [handleEffectFunction]);

  const formOnSubmit = e => {
    if (formType === 'firm') {
      addFirm(e, formFirm);
    } else if (formType === 'info') {
      addInfo(e, formInfo);
    } else if (productEdit) {
      addEditProduct(e, formProduct);
    } else {
      addProduct(e, formProduct);
    }
  };

  return (
    <Form autoComplete="off" onSubmit={e => formOnSubmit(e)}>
      {formType === 'firm' && (
        <>
          <Checkbox type={type} checkboxOnClick={handleCheckboxOnClick} />
          <Firm type={type} firm={formFirm} inputFirm={handleInputChangeFirm} />
        </>
      )}
      {formType === 'info' && <Info info={formInfo} inputInfo={handleInputChangeInfo} />}
      {formType === 'product' && <Product product={formProduct} inputProduct={handleInputChangeProduct} />}
      <FormButton icon={addIcon} buttonColor={green} />
    </Form>
  );
}

export default FormTemplate;
