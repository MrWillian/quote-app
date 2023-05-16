import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 5px 10px;
`;

export const QuoteInfo = styled.View`
  width: 90%;
`;

export const QuoteTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const QuoteDescription = styled.Text`
  color: #fff;
`;

export const DetailButton = styled.TouchableOpacity``;
