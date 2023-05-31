import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './routes';
import {AppProvider} from './context';
import './translation';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import mobileAds from 'react-native-google-mobile-ads';

Amplify.configure(awsconfig);

mobileAds().initialize();

const App = () => {
  return (
    <AppProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#292B38'} />
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
