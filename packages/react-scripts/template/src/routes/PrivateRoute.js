import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import GlobalContext from 'context/GlobalContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { globalState } = useContext(GlobalContext);

  // const { auth } = globalState;
  const auth = {
    authenticated: true,
  };

  return (
    <Route
      {...rest}
      render={props => (auth.authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ))
      }
    />
  );
};

export default PrivateRoute;