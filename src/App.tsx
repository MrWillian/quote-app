import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './routes';
import {AppProvider} from './context';
import './translation';

const App = () => {
  return (
    <AppProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#292B38'} />
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
