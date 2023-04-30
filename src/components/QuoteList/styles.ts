import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  display: flex;
  margin: 10px;
  background-color: #5c5091;
  width: 100%;
  border-radius: 5px;
  elevation: 2;
`;

export const QuoteItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 5px 10px;
`;

export const QuoteInfo = styled.View``;

export const QuoteTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const QuoteDescription = styled.Text`
  color: #fff;
`;

export const DetailButton = styled.TouchableOpacity``;

export const NotFoundLabel = styled.Text`
  font-size: 14px;
  color: #fff;
  margin: 5px;
`;
