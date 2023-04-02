import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ConfirmationCode, Dashboard, SignIn, SignUp, Splash} from '../screens';

const Stack = createNativeStackNavigator();

type MainStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ConfirmationCode: undefined;
  Dashboard: undefined;
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
    <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);

export default MainStackNavigator;
