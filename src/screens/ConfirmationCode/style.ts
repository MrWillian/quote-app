import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #292b38;
  padding: 5px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  font-family: 'NunitoSans';
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 5px;
  font-family: 'NunitoSans';
`;

export const EmailLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  text-decoration: underline;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'NunitoSans';
`;

export const Form = styled.SafeAreaView`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const ResendContainer = styled.View`
  margin-top: -20px;
`;

export const ResendLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  font-family: 'NunitoSans';
`;

export const ResendLinkContainer = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export const ResendLinkText = styled.Text`
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  font-family: 'NunitoSans';
`;
