import React from 'react';
import {Container, SearchButton, SearchInput} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchBar = () => (
  <Container>
    <SearchButton>
      <Icon name="search" size={30} color="#fff" />
    </SearchButton>
    <SearchInput placeholder="Search by word..." placeholderTextColor="white" />
  </Container>
);
