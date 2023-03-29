import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {SignIn, Splash} from '../screens';

const Stack = createNativeStackNavigator();

type MainStackParamList = {
  Splash: undefined;
  SignIn: undefined;
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
  </Stack.Navigator>
);

export default MainStackNavigator;
