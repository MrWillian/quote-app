import React from 'react';
import {Container, SearchButton, SearchInput} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchBar = () => (
  <Container>
    <SearchInput placeholder="Search by word..." placeholderTextColor="white" />
    <SearchButton>
      <Icon name="search" size={24} color="#fff" />
    </SearchButton>
  </Container>
);
