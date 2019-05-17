import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Context from 'context';
import Routes from 'routes';
import { AddingOutline } from 'assets/styled';

export const history = createBrowserHistory();

const App = () => {
  const [outline, setOutline] = useState(false);

  const handleFirstTabEvent = e => {
    if (e.keyCode === 9) {
      removeKeydownAndAddMouseDown();
      setOutline(true);
    }
  };

  const handleMouseDownOnce = () => {
    removeMousedownAndAddKeyDown();

    setOutline(false);
  };

  const removeMousedownAndAddKeyDown = () => {
    document.addEventListener('keydown', handleFirstTabEvent);
    document.removeEventListener('mousedown', handleMouseDownOnce);
  };

  const removeKeydownAndAddMouseDown = () => {
    document.addEventListener('mousedown', handleMouseDownOnce);
    document.removeEventListener('keydown', handleFirstTabEvent);
  };

  useEffect(() => {
    removeMousedownAndAddKeyDown();
  }, []);

  return (
    <Context>
      {outline && <AddingOutline />}
      <BrowserRouter>
        <Router history={history}>
          <Routes />
        </Router>
      </BrowserRouter>
    </Context>
  );
};
export default App;
