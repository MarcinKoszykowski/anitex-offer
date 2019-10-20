import React from 'react';
import GlobalStyle from 'styled/GlobalStyle';
import Main from 'views/Main';
import Background from 'components/Background';

const Root = () => (
  <>
    <GlobalStyle />
    <Background />
    <Main />
  </>
);

export default Root;
