import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './routes';
import {AuthProvider} from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#292B38'} />
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;
