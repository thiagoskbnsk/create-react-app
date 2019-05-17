import React from 'react';

const GlobalContext = React.createContext({});

const Context = props => {
  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};

export default Context;
