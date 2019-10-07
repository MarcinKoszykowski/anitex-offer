import React from 'react';
import GlobalStyle from './styled/GlobalStyle';
import Main from './view/Main';
import Background from './components/atoms/Background';

const Root = () => (
  <>
    <GlobalStyle />
    <Background />
    <Main />
  </>
);

export default Root;
