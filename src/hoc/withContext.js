import React from 'react';
import AppContext from '../context/index';

const withContext = Component => {
  return function contextComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
};

export default withContext;
