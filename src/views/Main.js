import React, { useState, useEffect, createRef, useCallback } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import NewItemBarTemplate from 'template/NewItemBarTemplate';
import CenterBarTemplate from 'template/CenterBarTemplate';
import PageTemplate from 'template/PageTemplate';
import Navigation from 'components/organisms/Navigation';
import Error from 'components/molecules/Error';
import password from 'data/password';
import Firefox from 'components/molecules/Firefox';

const Wrapper = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 70px 0;
  width: 7in;
`;

function Main() {
  const reference = createRef();

  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [print, setPrint] = useState(false);
  const [disabledCenterFormButton, setDisabledCenterFormButton] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(false);
  const [centerBarIsVisible, setCenterBarIsVisible] = useState(false);
  const [centerBarAnimation, setCenterBarAnimation] = useState(false);
  const [newItemBarIsVisible, setNewItemBarIsVisible] = useState(false);
  const [newItemBarAnimation, setNewItemBarAnimation] = useState(false);
  const [editProductNumber, setEditProductNumber] = useState(null);
  const [productEdit, setProductEdit] = useState(false);
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

  const [product, setProduct] = useState([]);
  const [formType, setFormType] = useState('');

  const isFirefox = typeof InstallTrigger !== 'undefined';

  const openNewItemBar = type => {
    setFormType(type);
    setNewItemBarIsVisible(true);
    setNewItemBarAnimation(true);
    setProductEdit(false);
  };

  const closeNewItemBar = () => {
    setNewItemBarAnimation(false);
    setTimeout(() => setNewItemBarIsVisible(false), 400);
  };

  const openCenterBar = type => {
    setFormType(type);
    setCenterBarIsVisible(true);
    setCenterBarAnimation(true);
    setDisabledCenterFormButton(false);
  };

  const closeCenterBar = () => {
    setCenterBarAnimation(false);
    setTimeout(() => setCenterBarIsVisible(false), 500);
  };

  const addFirm = (e, newItem) => {
    e.preventDefault();
    setFirm(newItem);
    setEdit(true);
    closeNewItemBar();
  };

  const addInfo = (e, newItem) => {
    e.preventDefault();
    setInfo(newItem);
    setEdit(true);
    closeNewItemBar();
  };

  const addProduct = (e, newItem) => {
    e.preventDefault();

    const item = { ...newItem };
    setProduct(prevState => [...prevState, item]);

    closeNewItemBar();
  };

  const editProduct = number => {
    setEditProductNumber(number);
    setProductEdit(true);
    setFormType('product');
    setNewItemBarIsVisible(true);
    setNewItemBarAnimation(true);
  };

  const deleteProduct = index => {
    const data = product;
    data.splice(index, 1);

    setProduct(data);
    setUpdateProduct(true);
  };

  const addEditProduct = (e, newItem) => {
    e.preventDefault();

    const data = product;
    const item = { ...newItem };
    data.splice(editProductNumber, 1, item);
    setProduct(data);
    setUpdateProduct(true);

    closeNewItemBar();
  };

  const buttonPrintOnClick = () => {
    setPrint(true);
    setTimeout(() => setPrint(false), 1000);
  };

  const saveData = (e, fileName) => {
    e.preventDefault();
    const a = document.createElement('a');
    const file = new Blob(
      [
        JSON.stringify({
          firm: { ...firm },
          info: { ...info },
          product: [...product],
        }),
      ],
      { type: 'application/json' },
    );
    a.href = URL.createObjectURL(file);
    a.download = `${fileName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    closeCenterBar();
  };

  const loadData = (e, data) => {
    e.preventDefault();

    setFirm(data.firm);
    setInfo(data.info);
    setProduct(data.product);
    setEdit(true);

    closeCenterBar();
  };

  const checkPassword = (e, pass) => {
    e.preventDefault();
    if (pass === password) {
      setLogin(true);
    } else {
      setLogin(false);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
    closeCenterBar();
    e.target.reset();
  };

  const logout = () => setLogin(false);

  const contextElement = {
    firm,
    info,
    product,
    formType,
    newItemBarIsVisible,
    print,
    closeNewItemBar,
    openNewItemBar,
    addFirm,
    addInfo,
    addProduct,
    checkPassword,
    deleteProduct,
    reference,
    buttonPrintOnClick,
    saveData,
    centerBarIsVisible,
    openCenterBar,
    closeCenterBar,
    login,
    logout,
    loadData,
    setError,
    centerBarAnimation,
    newItemBarAnimation,
    edit,
    productEdit,
    editProduct,
    editProductNumber,
    addEditProduct,
    disabledCenterFormButton,
    setDisabledCenterFormButton,
  };

  const handleUpdateProduct = () => setUpdateProduct(false);
  const handleEffectFunction = useCallback(handleUpdateProduct, [updateProduct]);

  useEffect(() => {
    handleEffectFunction();
  }, [handleEffectFunction]);

  return (
    <AppContext.Provider value={contextElement}>
      <Wrapper>
        <Navigation />
        <PageWrapper>
          <PageTemplate />
        </PageWrapper>
        <NewItemBarTemplate />
        <CenterBarTemplate />
        <Error error={error} />
        {!isFirefox && <Firefox />}
      </Wrapper>
    </AppContext.Provider>
  );
}

export default Main;
