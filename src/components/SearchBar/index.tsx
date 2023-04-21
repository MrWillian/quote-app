import React, {useState} from 'react';
import {Container, SearchButton, SearchInput} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import useQuotes from '../../hooks/useQuotes';

export const SearchBar = () => {
  const [filter, setFilter] = useState<string>('');
  const {filterQuotes} = useQuotes();

  const handleSearch = () => filterQuotes(filter);

  return (
    <Container>
      <SearchInput
        value={filter}
        onChangeText={setFilter}
        placeholder="Search by word..."
        placeholderTextColor="white"
      />
      <SearchButton onPress={handleSearch}>
        <Icon name="search" size={24} color="#fff" />
      </SearchButton>
    </Container>
  );
};
