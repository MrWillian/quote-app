import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;

export const QuotesList = styled.FlatList`
  background-color: #5c5091;
  width: 100%;
  border-radius: 5px;
  elevation: 2;
`;

export const NotFoundLabel = styled.Text`
  font-size: 14px;
  color: #fff;
  margin: 5px;
`;
