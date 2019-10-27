import React, { useEffect, useCallback, useContext } from 'react';
import AppContext from 'context/AppContext';
import FirmContext from 'context/FirmContext';
import InfoContext from 'context/InfoContext';
import FormContext from 'context/FormContext';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import { green } from 'styled/colors';
import addIcon from 'assets/icons/add.svg';
import Firm from 'components/Form/organisms/Firm';
import Info from 'components/Form/organisms/Info';
import Product from 'components/Form/organisms/Product';
import Button from 'components/Button';
import Checkbox from './CheckboxTemplate';

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
  } = useContext(FirmContext);
  const {
    info: { deadline, delivery, payment },
  } = useContext(InfoContext);
  const { product, productEdit, editProductNumber } = useContext(ProductContext);
  const { formType, addFirm, addInfo, addProduct, edit, addEditProduct } = useContext(AppContext);
  const { type, setType, formFirm, setFormFirm, formInfo, setFormInfo, formProduct, setFormProduct } = useContext(FormContext);

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

  const handleInputChange = (e, formData, setFunction) => {
    const value = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFunction(value);
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
          <Checkbox checkboxOnClick={handleCheckboxOnClick} />
          <Firm firm={formFirm} inputFirm={e => handleInputChange(e, formFirm, setFormFirm)} />
        </>
      )}
      {formType === 'info' && <Info info={formInfo} inputInfo={e => handleInputChange(e, formInfo, setFormInfo)} />}
      {formType === 'product' && <Product product={formProduct} inputProduct={e => handleInputChange(e, formProduct, setFormProduct)} />}
      <FormButton icon={addIcon} buttonColor={green} />
    </Form>
  );
}

export default FormTemplate;
