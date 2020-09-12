import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigation } from './app/navigation/AppNavigation';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
