import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container} from './styles';

export const LogOutButton = ({...props}) => {
  return (
    <Container {...props}>
      <Icon name="logout" size={20} color="red" />
    </Container>
  );
};
