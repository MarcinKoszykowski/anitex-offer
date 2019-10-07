import React from 'react';

function Main() {
  const [edit, setEdit] = useState(false);
  const [login, setLogin] = useState(false);
  const [print, setPrint] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(false);
  const [centerBarIsVisible, setCenterBarIsVisible] = useState(false);
  const [newItemBarIsVisible, setNewItemBarIsVisible] = useState(false);
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

  const openNewItemBar = type => {
    setFormType(type);
    setNewItemBarIsVisible(true);
  };

  const closeNewItemBar = () => {
    setNewItemBarIsVisible(false);
  };

  const openCenterBar = type => {
    setFormType(type);
    setCenterBarIsVisible(true);
  };

  const closeCenterBar = () => {
    setCenterBarIsVisible(false);
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

    setEdit(true);
    closeNewItemBar();
  };

  const deleteProduct = index => {
    const data = product;
    data.splice(index, 1);

    setProduct(data);
    setUpdateProduct(true);
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

  const checkPassword = (e, password) => {
    e.preventDefault();
    if (password === Password) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    closeCenterBar();
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
    inputReference,
    buttonPrintOnClick,
    saveData,
    centerBarIsVisible,
    openCenterBar,
    closeCenterBar,
    login,
    logout,
    loadData,
    edit,
  };

  useEffect(() => {
    setUpdateProduct(false);
  }, [updateProduct]);

  return (
    <AppContext.Provider value={contextElement}>
      <h1>Anitex APP</h1>
  </AppContext.Provider>
  );
}

export default Main;
