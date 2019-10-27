import React from 'react';
import GlobalStyle from 'styled/GlobalStyle';
import Main from 'views/Main';
import MainProvider from 'providers/Main';
import Background from 'components/Background';

const Root = () => (
  <MainProvider>
    <GlobalStyle />
    <Background />
    <Main />
  </MainProvider>
);

export default Root;
