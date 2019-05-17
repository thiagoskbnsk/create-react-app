import React, { useContext, useEffect } from 'react';
import Login from '_containers/login';
import GlobalContext from 'context/GlobalContext';
import { history } from '_history';

const LoginPage = () => {
  const { globalState } = useContext(GlobalContext);

  const { auth } = globalState;

  useEffect(() => {
    auth.authenticated && history.push('/contract-listing');
  }, []);

  return <Login />;
};

export default LoginPage;