import React, { useReducer } from "react";

import { authAction } from "./actions/authAction";

export const GlobalContext = React.createContext({
  auth: {}
});

const Context = props => {
  const [globalState, globalDispatch] = useReducer(authAction, {});

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context;
