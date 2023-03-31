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
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  margin-top: 5px;
`;

export const EmailLabel = styled.Text`
  color: #fff;
  font-size: 20px;
  text-decoration: underline;
  letter-spacing: 4px;
  text-align: center;
`;

export const Form = styled.SafeAreaView`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;
