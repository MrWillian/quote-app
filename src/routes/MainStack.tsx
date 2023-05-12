import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ConfirmationCode,
  Dashboard,
  DetailQuote,
  RegisterQuote,
  SignIn,
  SignUp,
  Splash,
} from '../screens';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
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
};

export default MainStackNavigator;
