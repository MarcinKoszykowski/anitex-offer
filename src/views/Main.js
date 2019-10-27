import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context/AppContext';
import FirmContext from 'context/FirmContext';
import InfoContext from 'context/InfoContext';
import ProductContext from 'context/ProductContext';
import BarContext from 'context/BarContext';
import password from 'data/password';
import Firefox from 'components/Error/Firefox';
import Error from 'components/Error/Error';
import NewItemBarTemplate from 'template/NewItemBarTemplate';
import CenterBarTemplate from 'template/CenterBarTemplate';
import PageTemplate from 'template/PageTemplate';
import Navigation from 'template/NavigationTemplate';

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

const Main = () => {
  const reference = useRef(null);
  const { firm, setFirm } = useContext(FirmContext);
  const { info, setInfo } = useContext(InfoContext);
  const { product, setProduct, editProductNumber, setEditProductNumber, updateProduct, setUpdateProduct, setProductEdit } = useContext(
    ProductContext,
  );
  const {
    setNewItemBarIsVisibility,
    setNewItemBarAnimation,
    setCenterBarIsVisibility,
    setCenterBarAnimation,
    setDisabledCenterFormButton,
  } = useContext(BarContext);

  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [print, setPrint] = useState(false);

  const [formType, setFormType] = useState('');

  const openNewItemBar = type => {
    setFormType(type);
    setNewItemBarIsVisibility(true);
    setNewItemBarAnimation(true);
    setProductEdit(false);
  };

  const closeNewItemBar = () => {
    setNewItemBarAnimation(false);
    setTimeout(() => {
      setFormType('');
      setNewItemBarIsVisibility(false);
    }, 400);
  };

  const openCenterBar = type => {
    setFormType(type);
    setCenterBarIsVisibility(true);
    setCenterBarAnimation(true);
    setDisabledCenterFormButton(false);
  };

  const closeCenterBar = () => {
    setCenterBarAnimation(false);
    setTimeout(() => setCenterBarIsVisibility(false), 500);
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
    setNewItemBarIsVisibility(true);
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
    const { firm: dataFirm, info: dataInfo, product: dataProduct } = data;

    setFirm(dataFirm);
    setInfo(dataInfo);
    setProduct(dataProduct);
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
    formType,
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
    openCenterBar,
    closeCenterBar,
    login,
    logout,
    loadData,
    setError,
    edit,
    editProduct,
    addEditProduct,
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
        <Firefox />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default Main;
