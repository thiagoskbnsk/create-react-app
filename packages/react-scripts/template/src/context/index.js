import React, { useReducer } from 'react';

import { authAction } from './actions/authAction';

const Context = props => {
  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};

export default Context;
