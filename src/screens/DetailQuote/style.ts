import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #292b38;
  padding: 25px;
  gap: 5px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const Subtitle = styled.Text`
  align-self: flex-start;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 5px;
`;

export const ContentContainer = styled.View`
  display: flex;
  margin: 25px 0px;
  gap: 20px;
`;

export const ContentContainerHead = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export const QuoteTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const QuoteDate = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const QuoteDescription = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const QuoteDeleteButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 150px;
  background-color: red;
  elevation: 2;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const QuoteDeleteButtonLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
`;
