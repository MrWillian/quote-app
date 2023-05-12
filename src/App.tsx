import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './routes';
import {AppProvider} from './context';
import './translation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <AppProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#292B38'} />
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
