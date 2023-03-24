import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#292B38'} />
      <RootNavigator />
    </>
  );
};

export default App;
