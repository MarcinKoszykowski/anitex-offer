import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkboxes from 'components/organisms/Form/Checkboxes';
import Firm from 'components/organisms/Form/Firm';
import Info from 'components/organisms/Form/Info';
import Product from 'components/organisms/Form/Product';
import withContext from 'hoc/withContext';
import Button from 'components/atoms/Button';
import Colors from 'styled/Colors';
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
  const { formType, addFirm, addInfo, addProduct, edit } = context;

  const [type, setType] = useState({
    firm2: false,
    email: false,
  });

  const [firm, setFirm] = useState({
    firm1: '',
    firm2: '',
    address1: '',
    address2: '',
    nip: '',
    phone: '',
    email: '',
  });

  const [info, setInfo] = useState({
    delivery: '',
    deadline: '',
    payment: '',
  });

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const setEditState = () => {
    if (edit) {
      setType({
        firm2: !!context.firm.firm2,
        email: !!context.firm.email,
      });

      setFirm({
        firm1: context.firm.firm1,
        firm2: context.firm.firm2,
        address1: context.firm.address1,
        address2: context.firm.address2,
        nip: context.firm.nip,
        phone: context.firm.phone,
        email: context.firm.email,
      });

      setInfo({
        delivery: context.info.delivery,
        deadline: context.info.deadline,
        payment: context.info.payment,
      });
    }
  };

  const handleCheckboxOnClick = value => {
    setType(prevState => ({
      ...prevState,
      [value]: !type[value],
    }));

    setFirm(prevState => ({
      ...prevState,
      [value]: !type[value] ? '' : null,
    }));
  };

  const handleInputChangeFirm = e => {
    const value = {
      ...firm,
      [e.target.name]: e.target.value,
    };
    setFirm(value);
  };

  const handleInputChangeInfo = e => {
    const value = {
      ...info,
      [e.target.name]: e.target.value,
    };
    setInfo(value);
  };

  const handleInputChangeProduct = e => {
    const value = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(value);
  };

  useEffect(() => {
    setEditState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  const formOnSubmit = e => {
    if (formType === 'firm') {
      addFirm(e, firm);
    } else if (formType === 'info') {
      addInfo(e, info);
    } else {
      addProduct(e, product);
      setProduct({
        name: '',
        price: '',
        image: '',
      });
    }
  };
  return (
    <Form autoComplete="off" onSubmit={e => formOnSubmit(e)}>
      {formType === 'firm' && (
        <>
          <Checkboxes type={type} checkboxOnClick={handleCheckboxOnClick} />
          <Firm type={type} firm={firm} inputFirm={handleInputChangeFirm} />
        </>
      )}
      {formType === 'info' && <Info info={info} inputInfo={handleInputChangeInfo} />}
      {formType === 'product' && (
        <Product product={product} inputProduct={handleInputChangeProduct} />
      )}
      <FormButton icon={addIcon} buttonColor={Colors.green} />
    </Form>
  );
}

export default withContext(FormTemplate);
