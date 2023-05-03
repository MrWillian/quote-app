import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type MainStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ConfirmationCode: undefined;
  Dashboard: undefined;
  RegisterQuote: undefined;
  DetailQuote: undefined;
};

export type mainScreenProp = NativeStackNavigationProp<MainStackParamList>;
