import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 0 10px;
  background-color: #5c5091;
  border-radius: 5px;
  elevation: 2;
  width: 100%;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchInput = styled.TextInput`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 5px;
`;
