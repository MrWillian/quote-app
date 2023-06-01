import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 0 20px;
  background-color: #5c5091;
  border-radius: 5px;
  elevation: 2;
  width: 100%;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchInput = styled.TextInput`
  color: #fff;
  font-family: 'NunitoSans';
  font-weight: bold;
  font-size: 16px;
  width: 80%;
`;
