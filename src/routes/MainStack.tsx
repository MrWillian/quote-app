import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  ConfirmationCode,
  Dashboard,
  DetailQuote,
  RegisterQuote,
  SignIn,
  SignUp,
  Splash,
} from '../screens';
import {Quote} from '../utils/types';

const Stack = createNativeStackNavigator();

type MainStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ConfirmationCode: undefined;
  Dashboard: undefined;
  RegisterQuote: undefined;
  DetailQuote: {quote: Quote};
};

export type mainScreenProp = NativeStackNavigationProp<MainStackParamList>;

const MainStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
    <Stack.Screen name="RegisterQuote" component={RegisterQuote} />
    <Stack.Screen name="DetailQuote" component={DetailQuote} />
  </Stack.Navigator>
);

export default MainStackNavigator;
